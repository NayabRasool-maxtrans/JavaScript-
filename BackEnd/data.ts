console.log("hello");


//typeannotation varaible 
const last: (string | number) = "rasool1";

let beg : string |number = 10;
beg=20;
console.log(beg);



console.log(last)

const num:(number | string |boolean | null | object)[]=["rasool","nayab",10,30,null,{name:"raja"},true];

console.log(num)

//function

function numb(c:number):string{
    return `the string is ${c}`;

}
console.log(numb(10));

//object
const objec: {name:string,location:string}[]=[{name:"rasool",location:"hyd"

},{name:"raja",location:"bng"}]
console.log(objec)
console.log(objec[0].name)

//array
const numbers:(number | boolean | null | string)[]=[1,2,4,76,8,true];
console.log("array annotation",numbers)
//console.log(numbers.pop());//delet last ele
console.log(numbers.unshift("raja"))//add elemnt first
console.log(numbers.push(19)) // add elemnt in las
//console.log(numbers.shift());//delete first

//class 

class arth{
    p:number;  //props
    q:number;
    constructor(p:number,q:number){ //constructor
        this.p=p;
        this.q=q

    }
    addit():number{                               //method
        return this.p+this.q;
    }
    mul (){
        console.log(this.addit());
        return this.p*this.q
    }

}
//create object for class 
const addition=new arth(10,20);
console.log(addition.mul())


//interface  using extend or implement keyword

interface arth{
    x:number;
    y:number;
    z:number;

    addition():number;


}
class adding implements arth{
    x:number;
    y:number;
    z:number;
    constructor(x:number,y:number,z:number){
        this.x=x;
        this.y=y;
        this.z=z;

    }

    addition():number{

        return this.x+this.y+this.z;
        

    }
    
}
const inter=new adding(10,20,30);
console.log("the value sum is x,y,z:",inter.addition())

//interface 

interface User{
    Username:string;
    email:string;
}
let data:User={
    Username:"RASOOL",
    email:"nayab@gmail.com",


}
console.log(`Username is ${data.Username} ,email is ${data.email}`)

//type aliases

type userd=number;

let usering:userd=10;
console.log(usering)

type Find=[{fname:string;lastname:string}]
//aliases for array object
let alia:Find=[{fname:"raja",lastname:"ajay"}];
console.log("aliases",alia)

//aliases for function
type vari=(d:number,e:number)=>number;
const sum:vari=(d,e)=>{
    return d+e;
}
console.log("aliases function",sum(10,20));

//union types
// 
let did:number |string ="completed";

console.log(did);

//optional proprty

//by using type aliases
type comp={name?:string | number, lname:string};  // name is optional property.

let comp1:comp={name:"raja",lname:"rasool"}
console.log(comp1);

//by using interface
interface give{
    n:number;
    email?:String; // it was optional property..

}


// enums

enum s{
    monday=1,
    friday,

}
console.log(s)
console.log(s.friday)


interface User{
    id?:number;
    ename:string,
    email:string,
    role:Role

}
enum Role{
    USER="user",
    ADMIN="ADMIN",
    GUEST="GUEST"

}
function getuser(user:User):string{

    return user.role;
}
let roling:User={

    ename:"rasool",
    email:"nayab@123",
    role:Role.ADMIN
   
}
console.log(getuser(roling))

//generic example 

function identity<T>(value:T,value1:any){     //generic function

    return ` THE VALUE OF ${value}`; //value
    
}
let d1=identity(10,"strinng"); //call the function type is number
let d2=identity(20,"raja");// call the function type is string 
console.log(d1)
console.log(d1)


//generic array function 
function identify<T> (value:T[]):T[]{ // here values are array []
    console.log(value[0]); //retrieve the first elent of the array
    return value; //return the entire array

}
let d3=identify([1,"string",true,null,undefined])  // array
let d4=identify([2,6,8,"raja",{name:"rasool",location:"hyd"}]) // array
console.log(identify(d3));//call the function
console.log(identify(d4));//call the function
//

//generic class
class generic<T> { // GENERIC CLASS 
    value :T; //TYPE of value
    constructor(value:T){ //constructor
        this.value=value;
    }
   get():T{              //method
    return this.value; //return the value of get() 
   }

}
let gen=new generic<Number>(10); // create object for the generic class
console.log(gen.get()) //print the value in number 
let gen1=new generic<string>("raja"); // create object for the generic class 
console.log(gen1.get()) //print the value in string
