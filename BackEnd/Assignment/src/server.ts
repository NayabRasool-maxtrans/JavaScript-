import http from "http"
import { Routes } from "./Routes/UserRoutes";
import { error } from "console";

const server=http.createServer(async(req,res)=>{

    try{
        await Routes(req,res);
    }catch(error){
        console.log(error)
        res.writeHead(500,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"internal server error"}))
    }
    

})

server.listen(9012,()=>{
    console.log("server working")
});