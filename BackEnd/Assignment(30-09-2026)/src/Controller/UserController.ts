import { IncomingMessage,ServerResponse } from "node:http";
import { deleteuser, getUsers, newuser, updateuser, userbyid } from "../Service/Userservice";
import { getbody } from "../Utils/getbody";
import { validationError } from "../Utils/Validate";

//sendrespose is send response to client like statuscode and userdata
function sendresponse(res:ServerResponse,statuscode:number,data:any){
    //status code headers content type json format like return json
    res.writeHead(statuscode,{"Content-Type":"application/json"})
    //response convert to json format like object->json 
    res.end(JSON.stringify(data));


}

//req,res are the requset from the client and response from the server default promise is void promise<void>
export async function getallusers(req:IncomingMessage,res:ServerResponse) {
    //handle exceptions here
    try{
        //call the getuser from service 
        const user=await getUsers();
        //send the response from server ,status code ,return the data
        sendresponse(res,200,user);

    }
    catch(error){
        //handle the error here 
        console.log(error)
        //res is response from server 
        sendresponse(res,500,{message:"internal server error"})

    }
    
}
//get by id from server
export async function getbyid(req:IncomingMessage,res:ServerResponse,id:number) {
    try{
        //call the userbyid
        const user=await userbyid(id);
        //if id not found 
        if(!user){
            //sendresponse from server
            return sendresponse(res,404,{message:"Not found user"})
        }
        //if id is there retrun the user data
        sendresponse(res,200,user);

    }
    //throes error 
    catch(error){
        sendresponse(res,500,{message:"Internal server error.."})

    }
}
//new user
export async function insertuser(req:IncomingMessage,res:ServerResponse) {
    console.log("insertion createed")

    try{
        //call the getbody() here new userdata
        const body=await getbody(req);
        console.log("hello")
        //validate call the validaterror pass the arg here body of the getbody
        const errors=validationError(body);
        //if validation means error mor than one  
        if(errors.length>0){
            return sendresponse(res,400,{message:"validation failed",errors})
        }
        //call the service method here
        const user=await newuser(body);
        //send the respose
        sendresponse(res,201,user)

    }catch(error:any){
        if(error.message ==="invalid JSON"){
            return sendresponse(res,400,{message:"invalid JSON"})
        }
        sendresponse(res,500,{message:"internal server error"})


    }


    
}
//delete by id
export async function deletebyid(req:IncomingMessage,res:ServerResponse,id:number) {
   
    try{
        //call thedeleteuser()passthe parameter
         const deleted=await deleteuser(id);
         //if id not there user not fond message
         if(!deleted){
           return sendresponse(res,400,{message:"user not found"})
           
         }
         //if id is there
         sendresponse(res,200,{message:"user deleted successfuly"})


    }
    catch(error){
        sendresponse(res,500,{message:"internal server error"})

    }

               
}
//updating
export async function upadting(req:IncomingMessage,res:ServerResponse,eid:number) {

    try{
        //call the getbody for the req body 
        const body=await getbody(req)
        //call the userbyid() if id there or not
        const id=await userbyid(eid);
        //if not there
        if(!id){
           return sendresponse(res,404,{message:"user not found"})

        }
        //validate reqbody
        const errors=validationError(body);
        //find any array length any error there
        if(errors.length>0){
            return sendresponse(res,400,{message:"validation failed",errors})
        }
        //update the data and id 
        const update=await updateuser(eid,body);
        sendresponse(res,200,update)


    }
    catch(error){
        sendresponse(res,500,{message:"internal server"})
    }
    
}