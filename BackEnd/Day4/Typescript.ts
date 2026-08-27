//function types

//functions are diveded into 3 types 1)named function 2)anonymous 3)allow function

//1)named function 
function hello(name:string):string{ //here name of function is hello value is string format and return type also string
    
    return `hello ,${name}`;// return value is hello, rasool
}
console.log(hello("rasool"));

//2)anonymous function

const res=function(name:string,age:number):string{ //anonymous functuion means name less function in that function pass 2 args 

    return `hii ${name} your age is ${age}`; //return value is string 

}
console.log(res("raja",20));//call the function here output is hii raja your age is 20

//3)allow function means => using here value type return also metioned here

//addition
const add=(a:number,b:number):number=>{return a+b} //allown function  using => here return type ,param type mentionde her
console.log("sum of the value is:",add(10,20));//console we print the value

//sub
const sub=(a:number,b:number):number=>{return a-b}
console.log("sub of the value is:",sub(10,20));


// function with parameters 

//optional or default parameter

function optional(fname:string,lname:string="raja",):string{ //in that deafult param always pass last.when we default param we get error it idefy the you have 2 params lie
    console.log(lname); //here in function call if lname is mention it takes function call value if not pass the value it tooks the default value
    
    return `first name is ${fname},last name is ${lname}` //here return the values



}
console.log(optional('rasool',"shaik")) //here here defult value changed
console.log(optional("sadula")) //here default is same

//rest parameter

function Rest(...numbers:number[]):number{ //here restparameter ...  array of numbers 
    return numbers.reduce((Accum,current)=>{ //we using reduce here sum of array elements
        return Accum+current;               //here accum value is initial 1 ,current is 2
                                            //here accum value update 3 currnt value is 3 
                                            //here accum value 6 current value is 4
                               //here return value is update the accum 
    });

}
console.log(Rest(1,2,3,4,6,7));


//function with retun type

//return value is number

function mul(a:number,b:number):string{ //here retun value is string 
    let mult=a*b;       // a,b multfly

    return `multiflications is ${a}*${b}=${mult}` //return the result
}
console.log(mul(10,20));//call the function  output is 200 
console.log(mul(10,"raja"));//call the function output is ultiflications is 10*raja=NaN
console.log(mul(10,true));//call function output is multiflications is 10*true=10

//retrun type is void 

function msg(msg:string):void{  // we type of function mention void means no return type 
    console.log(`hello ,${msg}`)
    //here no return

}
msg("hyderbad");


//type narrowing

//1)typeof 

function myfun(value:string | number){

    if(typeof value ==='string'){
        console.log(value.toUpperCase()); //if value is string then string convert to upper case

    }
    else{
        console.log(value.toFixed(2))//after digit add 00 like float
    }

}
myfun("rasool");
myfun(10)

//in operator

interface square{ // interface  
    sidelegth:number; //prop


}
interface rectangle{ // interface
    height:number; //props
    width:number; 

}
function area(shape:rectangle|square){ //here function union type here rectangle or square
    if ("sidelegth" in shape){  //sidelength presnt in shape of the object or not  if is there go to if return statemnt.

        return shape.sidelegth**2; //retun the value shape object 
    }
    else{
        return shape.height * shape.width; //shape object retreive the vprops lie height ,width
    }

}
const rectan:rectangle={height:20,width:30};//intilaization of interface rectangle variable
const squa:square={sidelegth:10}// initilization of square variable
console.log("rectangle area",area(rectan));//call the function
console.log("square ",area(squa));


//type assertions

//AS SYNX
let value:string="hello"; // 
let str=value as string; //value as string 
 //check value is string or not 
 //let str=value as number ; it will throws any error 
console.log(str)
console.log(typeof(str))

//angel bracket <>
let value1:unknown=10;
let str1=<string>value1 //here number not convert to string 
console.log(str1)
console.log("str1",typeof(str1)) // doubt
console.log(typeof(value1))



//classess

class arthimatic{    //class
    a:number; //properties
    b:number;
    c?:number;
    constructor(a:number,b:number,c?:number){ //constructor inject props here
        this.a=a;
        this.b=b;
        this.c=c;

    }
    /*constructor(a:number,b:number,c?:number){ //constructor inject props here
        this.a=a;
        this.b=b;
        this.c=c; // we cannot again create  constructor here
   */
    sumoftwo():string{ // it is method () return type is string 
        let sum=this.a+this.b // we took only two props then add the the two props 
           
        return`the sum of two is ${sum}`;//return the result

    }
    sumofthree():string{    //it is mthod() return type is string

        let three=this.a+this.b+this.c; // we took only 3 props then add the the 3 props 
        return`the sum of the ${three}`; //return the result 
    }
    
    
}
const ad=new arthimatic(10,20); // create object for class but we pass only 2 props 
const ad1=new arthimatic(10,20,30);// create object for class but we pass only 3 props 
console.log(ad.sumoftwo())
console.log(ad1.sumofthree())

//inner classes not possible in ts 

//====>access modifier :

//1)public 

class publicmod{ // we have one class
    public name:string[]; // props are in array her public 
    constructor (...name:string[]){ //  here restparameter
        this.name=name;

    }
    public hello():void{ //method is string..
        console.log(`hello ${this.name.join(",")}`)
        
    }
}
let pub=new publicmod("rasool","raja","mani");//create object for class 
console.log(pub.name)//here we inside class  props outside accessing pub.name=[ 'rasool', 'raja', 'mani' ]
pub.hello();//call the method here output is ===>hello rasool,raja,mani

// 2)private

 class person{
    private empid:number;
    constructor (empid:number){
        this.empid=empid;

    }
     getemp():string{

        return `person empid is  ${this.empid}`;
    }
}
let per=new person(101);

console.log(per.getemp());
///console.log(per.empid); it was not throwing error 

//3)protectd 

class User{
    protected age:number;
    constructor(age:number){
        this.age=age;
    }
}
class emp extends User{
    public getuser():string{
        return `emp age is ${this.age}`;

    }
}
const employee=new emp(20);
console.log(employee.getuser());
//console.log(employee.age)

//4)readonly

class user{ //class 
   readonly id:number; // it was read only prop 
   constructor(id:number){ //constructor
    this.id=id;
   }
}
const u=new user(10);// create object for user 
console.log(u.id) //get 
//console.log(u.id=20)// we cacnnot reassign value again

//=====>constructor

class hello1{
    constructor(public name:string, public email:string) { 
        //inside constructor accessmodifier not given to email then value is undefined
    
    }
}
const hel=new hello1("rasool","nayab@gmail.com");
console.log(hel.name)
//console.log(hel.email) undefined accessmodifier is email:string
console.log(hel.email)

//======>inheritance


//overriding:same method present parentclass and childd class is 
class persondetails{         //it was treat as the parentcalss 
    constructor(private fname:string,private lname:string){ //constructor inject props
        this.fname=fname;
        this.lname=lname;
    }
    get():string{   //get() it was method and it is method overriding 
        return `I am ${this.fname} ${this.lname}.` //return the result 
    }
}
class employeedetails extends persondetails{      //trat as the child class 
    //personaldetails extend to the employeedetails 
    constructor (fname:string,lname:string,private role:string){ 
        super(fname,lname);//call the parent class constructor
    }
    get():string{   //method overriding 
        return super.get()+`the job role is ${this.role }`;
        //here super keyword used for the get the method from parent calss 
    }
}

const details=new employeedetails("shaik","rasool","developer")//create object for the class

console.log(details.get());// call the get();



//=========>abstract class



abstract class animal{   //abstarct class 
    constructor(public name:string){ //constructor 

    }
    abstract makessound():void; //abstract method body  is inherit from another class 

    move():void{                //method retrun type void no return here
        console.log(`${this.name} is moving..`)
    }

}
class Dog extends animal{ //class exends abstract class 
    makessound(): void { // implement abstarct method here
        console.log(`${this.name} says bow bow ..`)
    }

}
class cat extends animal{ //cat class extends animal
    makessound(): void {  // implement abstarct method here
        console.log(`${this.name} says meow meow ..`)
    }
}
const dog=new Dog("dog") //create object for the dog 
dog.makessound();//call the abstract method 
dog.move() //call the method here
const Cat=new cat("cat")//create object for the cat
Cat.makessound();//call abstract method using Cat object reference
Cat.move();//call method 



//interface

interface Animal{  //interface
    name:string; //props 
    sound():void; //method body is implemted anothe place
}
class tiger implements Animal{ //class interface body implemented here
    name:string;
    constructor(name:string){  //constrctor
        this.name=name;
    }
    sound(): void {  //implemention body 
        console.log(`hii  ${this.name}`)
    }
}
const Tiger=new tiger("Tiger")//create object for the tiger
Tiger.sound()//call the method.

///=====>generic

//generic interface
interface contact<T>{  //GENERIC INTERTFACE
    value:T; 
    get():T;}// retrn type is generic type 

//generic class 
class Mycontact<T> implements contact<T>{ //generic class implent the generic interface 
    value:T; //varibale is genric 
    constructor(value:T){    //constructor
        this.value=value;


    }
    get():T{   //get method generic return type 
        return this.value;
    }
}

const cont=new Mycontact(10) //create object for mycontact pass number format
console.log(cont.get())//call get method
const conta=new Mycontact("rasool")////create object for mycontact pass "string" format
console.log(conta.get())



//dependency injection

class info{  //CALSS
    name:string;  //PROPS 
    contact:number;
    constructor(name:string,contact:number){ //CONSTRUCTOR
        this.name=name;
        this.contact=contact;

    }
    get():string{   //GET METHOD 

        return `my name is ${this.name}.contact number is${this.contact}` //RETURN THE VALUES 

    }

}     

class address{   //CLASS 
    addr:string;
    pincode:number;
    constructor(addr:string,pincode:number,private INFO:info){//HERE CONSTRUCTOR INJECT THE INFO CLASS HERE
        this.addr=addr;
        this.pincode=pincode;
    }
    get(){
        return `${this.INFO.get()}.my address is ${this.addr} and pincode ${this.pincode}`;
    }
}

const inf=new info("rasool",9381048461)//CREATE THE OBJECT FOR INFO

const ADDRESS=new address("hyd",500032,inf,)//CREATE OBJECT FOR ADDRESS INJECT INFO IN THE ADDRESS OBJECT HER
console.log(ADDRESS.get());//CALL THE METHOD HER