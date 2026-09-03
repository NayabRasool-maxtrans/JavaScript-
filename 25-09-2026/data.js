

let large=[29,34,76,76,27,36,99,29,120]
let max=large[0];

for(let i of large){
    if(i>max){
        max=i;
        
    }

}
console.log("largest number...",max)
//using reduce
let maximum=large.reduce((acc,value)=>{return value>acc?value:acc})
console.log("using reduce maximum",maximum)


//duplicate values
let dup=[];
large.sort();
for(let i=0;i<large.length-1;i++){
    if(large[i]===large[i+1] && !dup.includes(large[i])){
        dup.push(large[i])
    }
}
console.log("duplicate values",dup)

//convert array into object using spread opertseconor
let obj={...large}
console.log(obj)

//sort user by name

let User=[{name:"rasool",location:"hyd"},{name:"anish",location:"chintal"},{name:"vamshi",location:"balanagar"}]
let Userbyname=User.sort((a,b)=>a.name.localeCompare(b.name));
console.log(Userbyname)

//group user by role 

let User1=[{name:"rasool",location:"hyd",role:"developer"},{name:"anish",location:"chintal",role:"tester"},{name:"vamshi",location:"balanagar",role:"developer"}]

let groupuser=User1.reduce((first,second)=>{
    let roleby=second.role;
    if(!first[roleby]){
        first[roleby]=[]
    }
    first[roleby].push(second)

return first;


},{})

console.log("group user by role",groupuser)


//active user
let userdata=[{id:1,name:"rasool",active:true},{id:1,name:"raja",active:false}]
let activeusers=userdata.filter((usered)=>usered.active)
console.log(activeusers)

// simple function
const items=[{name:"rasool" ,role:"dev"},{name:"raja" ,role:"dev"}]

function searchfunction(search,item){
    const query=search.toLowerCase();

    return item.filter((item)=>{
        return item.name.toLowerCase().includes(query);
    })
}
console.log("search function",searchfunction("ra",items))

/////Day2


let a=10//global scope

function ras(){
    let b=20;  //function scope
    
    console.log(`the value of a ${a},${b}`);
}
let b=20;

ras();
console.log("the value of a",a)  //throws the refreence error

//hoisting

d=10; // assign the value 
console.log(`the value of the d is ${d}`)
var d; //declartion

let car;
car="skoda";



//console.log(car)//throws the refrence error

//clouser
function outer(){
    let name="hello world "
    
    return function inner(){
        console.log(`inner function : ${name}`)
    };
    
}
let clouser=outer();
clouser();

//private variable 

function counter(){
    let count=0;//private variable 

    return function(){
        count++;//access the private variable and modifyed 
       return count;
    }
}
let increment=counter();
console.log(increment());

//higher order and call back  function


function fun(){ //this is callback function 
    console.log("higher order function...")
}

//higer order function
function fun2(action,name)     //takes another function as a arg 
{
    action();
    console.log(`${name}`)

}
fun2(fun,"fun2")


//MAP 
let array=[1,7,89,65,43,89,26];
let square=array.map(num=>num*num)
console.log(square)


let res=array.map((val,index)=>{return {index:val, value:val*val}})
console.log(res)

//filter
let even=array.filter((num)=>num%2==0)
console.log(even)


// reduce              array=[1,7,89,65,43,89,26];

let total = array.reduce((num,sum)=>{
    console.log("num",num)
    console.log("sum",sum)
    return num+sum;
},0)
console.log(total);

const pets=[{name:'flufyy', type:'dog'},{name:'whisers', type:'cat'},
    {name:'spot', type:'dog'}]

    // group values 
const groupedpets=pets.reduce((grouped,pet)=>{
    //console.log("grouped",grouped),
    //console.log("pet",pet)
    let type=pet.type
    if(!grouped[type]){
         //console.log("type ",type)
         grouped[type]=[]
         console.log("grouped type",grouped[type])
    }
    grouped[type].push(pet.name)
   // console.log("pusing vales
   // ",grouped[type].push(pet.name))
    console.log("grouped values",grouped)

    return grouped;

},{


},{})

console.log(groupedpets)

//foreach
let n=array.forEach((n)=>{
    if(n%2==0){
        console.log(`even number are ${n}`)
    }
    else{
        console.log(`odd number are ${n}`)
    }
})

//find()
let find=array.find((num)=>{if(num>20){
    return num;

}})
console.log(find)

//some()
let some=array.some((n)=>{
    if(n<0){
        return n;
    }
})

console.log(some)

//every

let every=array.some((n)=>{
    if(n<0){
        return n;
    }
})

console.log(every)

//promise

let checkeven=new Promise((resolve,reject)=>{
    let n=76;
    if(n%2==0){
        resolve("given number is even ")
    }
    else{
        reject("given number is odd..")
    }
})

checkeven.then((message)=>{
    console.log(message)
}).then((err)=>console.log(err))


//async await


function pizza(){
    console.log("pizza order")
   
  return "";
    
}

function Drinks(){
    console.log("Drink order")
    pizza();
  return "" ;
}
async function fetchdata(){
    //const pizzares= await pizza();
    const drinks= await Drinks();


return drinks;

}
fetchdata()

function time(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve(console.log("helo"))
        },2000)
    })
}

async function timer() {
   return await time();
    
}
timer();




//try catch
// 
function checkage(age){
    if(age<18){
        throw new Error("you mjust be 18 or older..")   
    }
    
    return "access grated you are eligible for voting"
}

try{
    checkage(15);
    console.log("eligible..")

}
catch(error){
    console.error('access denied ',error.message)
}


//day 3

//sync  async 

console.log("hello")
console.log("hello1")
function three(){
    console.log("three")
}
function four(){
    console.log("four")
    return three();

}
setTimeout(() => {
    console.log("five")
    
}, 2000);

four();



