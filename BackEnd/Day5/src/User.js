const http=require("http")

const { json } = require("stream/consumers")
let user=[{
    id:1,
    name:"rasool",
    adress:"hyderbad",
    email:"nayab@gmail.com"},
{
    id:2,
    name:"raja",
    adress:"hyderbad chintal",
    email:"raja@gmail.com"


}]

const Server=http.createServer((req,res)=>{
    //http methods and rest api concepts 
    //create restapi using user data
     //console.log(req.headers)
    res.setHeader("Content-Type","application/json")//here response is json 
    
    //parse url 
    const url=new URL(req.url,`http://${req.headers.host}`)
    //console.log(`http://${req.headers.host}`) //http://localhost:8089
    //pathname from url 
    const pathname=url.pathname
    //method from request 
    const method=req.method
    console.log(pathname,method)

    //get all users 

    if(method ==="GET" && pathname==="/users"){  //HERE METHOD GET PATHNAME IS users
        res.statusCode=200; //status if 
        res.end(JSON.stringify(user));//return data in json format
        return ;
    }

// GET USER BY ID 

    if(method ==="GET" && pathname.startsWith("/users/")){

        const id=Number(pathname.split("/")[2]);
        const ID=user.find(user=>user.id===id);
        if(!ID){
            res.statusCode=404;
            res.end(JSON.stringify({message:"User not found"}))
            return ;
        }
        res.statusCode=200;
        res.end(JSON.stringify(ID));
        return ;


    }
//post create new user

if(method==='POST' && pathname==="/users"){ //here mention method type and pathname
    let body=""; //we took empty varibale 
    req.on("data",(chunck)=>{ //"on" is prebuild method body+=receive data user requestdata
        body+=chunck.toString(); 
    });
    req.on("end",()=>{    //receive end of the data
        try{
            console.log(body) //  {   "name":"manikanta setti","adress":"hyderbad madharanagar","email":"mani7@gmail.com"}

            const data =JSON.parse(body); //convert data in json format

            const newuser={    //now add the new user receive data .data receive const data =JSON.parse(body); / 
                id:user.length+1,
                name:data.name,
                adress:data.adress,
                email:data.email

            }
            user.push(newuser);//push receive data
            res.statusCode=201; // satatus 201
            res.end(JSON.stringify({message:"user created ",user:newuser})) //end of response


        }catch(error){ 
            res.statusCode=401;
            res.end(JSON.stringify({message:"invalid JSON.."}))

        }
    })
    return
}

//put metthod update details 

if(method==="PUT" && pathname.startsWith("/users/")){ //method is put update the data

    const id = Number(pathname.split("/")[2]);  //here split the path /user/5 spilt it then receive "5" convert to number

    let userindex=user.findIndex((user)=>Number(user.id)===id); //find the positionof the index

    if(userindex === -1){ //no index found then not found user
        res.statusCode=404;
        res.end(JSON.stringify({message:"not found user"}))
        return ;

    }
    
    let body="";//we too empty varibale 
    req.on('data',(chunck)=>{   ////"on" is prebuild method body+=receive data user requestdata
        body+=chunck.toString();
    })
    req.on("end",()=>{
        try{
            let data=JSON.parse(body);
             user[userindex]={   //store in direct upadte it in user 
                id:id,
                name:data.name,
                adress:data.adress,
                email:data.email
            }
            res.statusCode=200
           res.end(JSON.stringify({message:"update the details ",user:user[userindex]}))
        }
        catch(error){
            res.statusCode=400;
            res.end(JSON.stringify({message:"invalid json "}))
 
        }

    })
}

//delete by id 

if(method==="DELETE" && pathname.startsWith("/users/")){  //delete by id
    const id=Number(pathname.split("/")[2]) //split the path then find id here string format convert to number
    const findid=user.findIndex((user)=>user.id===id);  //match the position of the index
    if(findid===-1){
        res.statusCode=401;
        res.end(JSON.stringify({message:"user not found"})) //if not matching position user not found 
        return
    }
    const deleteuser=user.splice(findid,1); //delete findbyid delete count is 1
    res.statusCode=200;
    res.end(JSON.stringify({message:"user deleted ",user:deleteuser[0]}))//delete the particular remaining data shows 
    return
}
res.statusCode=404;
res.end(JSON.stringify({
    message:"route not found"
}))



})
Server.listen(8089,()=>{console.log(" server working..")})//server