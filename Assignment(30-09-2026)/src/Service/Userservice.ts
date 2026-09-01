import {promises as fs} from 'fs';
import path from 'path';
import { User } from '../User/User';

//fs is filesystem used fro create,writefile,deleted file 

const filePath=path.join(process.cwd(),"data","user.json");
//path is used for working with file we have use
console.log(process.cwd());
 //exact location of the path D:\JavaScript\BackEnd\Assignment
//data is folder name inside file name


console.log("Reading file:", filePath);

//file path Reading file: D:\JavaScript\BackEnd\Assignment\data\user.json

//we have read it takes sometime that why we use the async function
async function readusers():Promise<User[]>{ //retrieve user data from file user.json
    //that why we use return type is promise user[]
    //we have  use here "promise" retreive userdata from files that 

    //read the file here
      const data=await fs.readFile(filePath,"utf-8");
      //readthe file we have pass filepath ,utf give nomal text format
     //data give {"name":"rasool","age":20}
      return JSON.parse(data);
      //json mean javaobject convert noramal array or object 
      // {name:"rasool",age:20}


}

async function writeusers(users:User[]):Promise<void> { 
    //save user data thats why return value is void
    await fs.writeFile(filePath,JSON.stringify(users,null,2))  
    //users data save and  here 2 is space and null is the replacer  
}

//get all user from stored file;
export async function getUsers():Promise<User[]> {

    //return user[] data from readusers() file
  return await readusers();    
}
//get user by id
export async function userbyid(id:number):Promise<User | undefined> {
    //we have pass one arg and return type only one data is retun that why we 
    //use promis<User>
    //here data from fs file we have call readuser()
    const users=await readusers();
    //then find matching find or not 
    return users.find(user=>user.id===id);   
}

//new user
//newuser record 
export async function newuser(data:Omit<User,"id">):Promise<User> {
    //we pass arg is data omit because omit used for remove prop one or more like
    //userdata posting process if user no neeed id provide 
//read the file
    const user=await readusers();
    //in that id =length of the file if file empty id:1
    //in that file any data is there length>0 then add +1 from user.id
    const id=user.length>0 ? Math.max(...user.map(user=>user.id))+1:1;
    //here create new user
    //retrun type User data 
    const newuser:User={
        id:id,
        ...data //here data is spread operator 
        //retrieve the all data from user req
    }
    //push the data into file 
    user.push(newuser)
    //save the file writeuser file
    await writeusers(user)
   return newuser; //return update value here   
}

//update user by id partial update

export async function updateuser(id:number,data:Partial<Omit<User,"id">>):Promise<User | undefined> {
    
    //here partial is optinal props omit mean remove id from update
    //retreive data from readuser file
    const user=await readusers();
    //find position/index
    const index=user.findIndex((user)=>user.id===id)
    //if id not found there undefined
    if(index===-1){
        return undefined;
    }
    //update user

    user[index]={
        ...user[index],//exit props 
        ...data//update place replace user
    }
    //save file
    await writeusers(user)
    //return the update user data
    return user[index];
    
}

//delete by id
//here retun type is boolean 
export async function deleteuser(id:number):Promise<boolean> {
    //retreive data file from file 
    const user=await readusers();
    //findindex return the position of the index  if not there retun -1
    const index=user.findIndex(user=>user.id===id);
    //if matching index not availbe then retrun -1
    if(index===-1){
        return false;
    }
    //delete index=1  ,here 1 record is deleted like that
    user.splice(index,1);
    //save the file 
    await writeusers(user);
    return true;
    
}