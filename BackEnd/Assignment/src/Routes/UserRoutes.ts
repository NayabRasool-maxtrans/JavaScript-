import { IncomingMessage, ServerResponse } from "node:http";
import { deletebyid, getallusers, getbyid, insertuser, upadting } from "../Controller/UserController";
import { deleteuser } from "../Service/Userservice";

//routes used for the navigation like get post,delete,put url of client request
export async function Routes(req:IncomingMessage,res:ServerResponse) {
    //type of method default method is get
    const method=req.method;
    console.log(method)
    //url of request
    const url=req.url||"/"
    console.log(url)
    const match=url.match(/^\/users\/(\d+)$/)
    //get all users 
    if(method==="GET" && url==="/users"){
        return getallusers(req,res);
    }
    
    //get by id
    if(method==="GET" && match){
        const id=Number(match[1]);
        return getbyid(req,res,id)
    }
// new user
if(method==="POST"&& url==="/users"){
    return insertuser(req,res);
}
//delete
if(method==="DELETE"&& match){
    const id=Number(match[1]);
    
    return deletebyid(req,res,id);
}
//update
if(method==="PUT" && match){
    const id=Number(match[1])

    return upadting(req,res,id)
}

    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({message:"route not found"
    }))
    
}