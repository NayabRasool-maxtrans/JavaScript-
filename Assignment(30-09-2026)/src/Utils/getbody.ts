import { resolve } from "node:dns";
import { IncomingMessage} from "node:http";

export function getbody(req:IncomingMessage):Promise<any>{//incomingmessage is request of the client return type is promise due to getbody wait not return at every time it was wait time  
    return new Promise((resolve,reject)=>{ //getbody method actually used in post and put user data purpose

        let body=""; //empty string
        req.on("data",(chunck)=>{ //chunck is peice of code like
            //request the data user retreive the each chunck=> name:"rasool" 
            body+=chunck.toString();//name:rasool conver to string retrieve each chunck and add it empty string
            //body={"name":"rasool","age":20,"email":"nayab@gmail.com","address":"hyd"}

        })
       
        req.on("end",()=>{  
            try{
                const data=body?JSON.parse(body):{}//body convert to javascript object like format of the array/object
                // data is {name:"rasool",age:20,email:"nayab@gmail.com"}
                resolve(data);
                
            }catch(error){
              reject(new Error("Invalid json"))
            }

        })
        req.on("error",(error)=>{ //throws the rror 
            reject(error);

        })
            
        })



    };

    


