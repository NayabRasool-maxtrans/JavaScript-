console.log("hello world")

const http=require("http")
const fs=require("fs")



const server=http.createServer((req,res)=>{   //create http server
    console.log("new req rec..");
    //console.log(req.headers);
    console.log(req.url) //req the url 
    console.log(req.method)//by default we receive get method
    const log=`${Date.now()} ${req.url} new request received \n `
    fs.appendFile('log.txt',log,(err,data)=>{
        console.log(log)
        //console.log(data)=>undefined means data is append in txt thats why data is undefined
        //res.end("hello world") thtrows the error beacuse the after res ending why call again response that why its throw the error.

        switch(req.url){ //switch based default is home page 
            case '/':
                res.end("home page");
                break;
            case '/about': //if page navigate to about res send is i am rasool
                res.end("i am Rasool")
                break;
            default :
               res.end("  404 NotFound") //by default  if you any url /hello it throws the 404 found
               
        }
    })
    console.log(log)

    //http methods and rest api concepts 


});

server.listen(8000,()=>console.log("server started.."))