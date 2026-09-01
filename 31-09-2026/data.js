const fs=require("fs");
const {Worker}=require('worker_threads');

console.log("1")
//blocking
const result=fs.readFileSync("contacts.txt","utf-8")
console.log(result);
console.log("2") //output is 1 hello world 2 


//non blocking 
console.log("non blocking...")
console.log(3);
const res=fs.readFile("contacts.txt",'utf-8',(error,res)=>{
    console.log(res)
})
console.log("4")


//WORKER THREAD
function runworker(){
    return new Promise((resolve,reject)=>{
        const work=new Worker('./worker.js')
        work.on('message',resolve);
        work.on('message',reject);

    })
    

}

async function main(){
    console.log("starting workers...")
    const res=await runworker();
    console.log("result",res)
    console.log("finished")

}
main();




//SQL 
/* 
AUG 31
…………

1)MYSql is a open-resource relational database  management system(RDMS) that uses structure query language store ,
organize and manage data in structure tables consisting of rows ,columns.
2)DataBase:create database
>Syn: create database company;(create new database)
 >Show databases;// show all databases in sql
         
>Use database  //working in tables you have to use which database tables can be create
>create database if not exits company =>create only if does not exit
>drop database company ==>delete database using command
>select database()       ==>show the currently selected database.

3)tables  : tables are used organize and store the data in relational database;
    

>create table: create new table syntax

Create table user(id int,name varchar(100),email varchar(100),password varchar(100));

>show all the tables
  Syn: show tables;

>alter table:

  > alter table user add phonenumber varchar(15);   //add the column
  >alter table user drop column phonenumber     //drop the column
 >alter table  user modify column name varchar(100) not null; //modify  the column  datatype here 
>truncate table user            // completely remove table information 
>drop table user                     //completely remove all the information and table.


4) Primary Key: primary is a constraint that uniquely identifies each record in a database table.

>primary key must contains unique value and not null value.
>A table have only one primary key 

 Syn :  Create table user(id int PRIMARY KEY,name varchar(100),email varchar(100),password varchar(100));

>composite primary key :     unique identifier relies on combination of two or more columns

Syn :     Create table course ( studentid int,courseid int ,enrolldate date,PRIMARYKEY( studentid, courseid));
>existing table we add the primary key

  Syn:
Alter table user add PRIMARY KEY(id);

>Drop the primary key  :  drop primary key constraint 
  
       syn> alter table user drop primary key

5)foreign key: foreign key establish links between two tables , and prevent action that will destroy the links between them.
 
> foreign key a column in a table thats refer to the primary key of the table.

Person table :
…………….
Create table person (id int auto_increment primary key,name varchar (100),age int);

Order table 
……………

Create table order(id int primary key,ordernumber int ,id ,constraint fk_person foreignkey(id) reference person(id));

6)Not null : a column cannot accept the null(empty) value.

Syn:
Create table user(id int,name varchar(100) NOT NULL,email varchar(100)NOT NULL ,password varchar(100) NOT NULL);


7)UNIQUE:
  Ensure that a column cannot contain duplicate values.

Synx: 
Create table user(id int,name varchar(100) NOT NULL,email varchar(100)NOT NULL UNIQUE ,password varchar(100) NOT NULL);


8)default : default constraint used to automatically insert a default value

Syn :    
Create table user(id int,name varchar(100) NOT NULL,email varchar(100)NOT NULL UNIQUE ,password varchar(100) NOT NULL,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);

9)AutoIncrement:  auto increment field in a numeric column that automatically generate unique number.


Synx:
Create table users(id BIGINT PRIMARY KEY AUTO_INCREMENT,name varchar(100) NOT NULL,email varchar(100)NOT NULL UNIQUE ,password varchar(100) NOT NULL,created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);
// create table orders(orderid int primary KEY,ordernumber int not null,
// id int ,constraint fk_person FOREIGN KEY(id) REFERENCES person(id));




using foreign key
.......................
select * from orders;

//


insert into person(name,age) values ("rasool",25),("raja",26),("ramesh",30)
alter table orders modify orderid int auto_increment;
select * from orders;

insert into orders(ordernumber,id) values (1908,1),(3673,2),(2638,1);

select person.name ,orders.id,orders.ordernumber from person  join orders  on person.id=orders.id




  














  






*/