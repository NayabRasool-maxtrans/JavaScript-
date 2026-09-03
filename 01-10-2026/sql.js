/*

1)indexes : create index statement is used to create indexes on tables in database to speed up the data retrieval,
The user cannot see the indexes ,they just used speed up the queries /searches.

Type of indexes are two types: unique and non-unique;

i)create index: create non unique indexes (duplicates are allowed)

>create index indexname on tablename (column1,column2)
ii)create unique index: create a unique index (duplicate values are not  allowed)

>create unique index indexname on tablename(column1,column2);

Dropindex: drop index is used to delete  indexe in table .
……………
>alter table tablename drop index indexname;


2)select ::

>select statement used to select data from database.

Synx:
Select * from users ; //return the all the data from table ;

Synx: 
Select name,email from users; //return the only name ,email from  table.

3)insert ::
>insert into statement is used to insert the new record in table 

>This insert the table data specific columns only.
  >Insert into users(name,email) values("rasool","nayabrasool@gmil.com");


>This insert the table data all columns only.
  >
Insert into users(name,email,password) values("rasool","nayabrasool@gmil.com","ras@123");

3)Update:
…………..

>update statement used to update or modify table data one or more columns .
>
Update tablename set column1=value,column2=value  where condition;

Update users set name="nayabrasool" where id=1;


>without condition all table data will update .

4)delete ::delete statement is used delete existing record in a table.

>delete the specific record 
delete  from users where id=2;
>without where delete all records 
  delete  from users;

5)where  :: where clause used to filter the records.

Select * from users where id=1;

6)orderBy :::
 >orderby is used to sort the result by ascending or descending order;

>by default orderby is “ASC”
    Select * from users order by id  ;

>orderby is “DESC”
    Select * from users order by id  desc ;

 7)group by  ::
…………………..

>group by used to group rows that have same value  into summary rows.

  >group by name 
  
#group by name 
select name  from users group by name; 

>duplicate values 

#duplicate name 

select name ,count(name) as duplicatename from users group by name; 


8)Having ::  having clause is used to filter the result of the groupby based on the aggregate function.


Syn:

#duplicate  values greater than 2
select name ,count(name) as duplicatename from users group by name having count(id)>=2; 

#duplicate  values and order by name ;
select name ,count(name) as duplicatename from users group by name having count(id)>=1 order by name; 

9)limit ::
 Limit is used to limit the  number of records return


#limit 1 return only one record 
select * from users limit 1;

#order by name is desc order  and limit only 2 return 2 records 
select * from users order by name desc limit 2;


10)Offset  :: offset clause is used to limit to specific number of records skips  


#offset
#here  user table limit is 3 records but records start from 1 to we given limit because we use the offset here.
#start from 1 means it skip the 1 records also 
select * from users limit 3 offset 1; #now it was 2 records 


#return 1 record

select * from users limit 3 offset 2; #now it was 2 records 


#offset + orderby
select * from users order by name  limit 3 offset 2; #now it was 2 records 

11)like :: like operator is used in where clause to search specific pattern with columns text
……….

>two types of wildcards here 

i) % - zero or more characters 
II)_  - one character


#Like operator is used for patterns .
#here name start with 'm' and _ means wildcard for any one character 
#and % means one or more  characters.

select * from users where name like 'm_%'

#here like operator _ mean any character and 
# char start with 'a' only remaining characters using %

select * from users where name like '_a%';

12)IN  :: in operator used in where clauses to check to specific column value matching with list of values  

>#IN OPERATOR  
# here in that id only matching columns only return if not matching return null;

select * from users where id in(1,5,10,199);
#in operator using matching names 

select * from users where name in('mani','nayabrasool')
#inside in we also write subquery


13)Between :::

>between operator used in where clause to select the specified value range.

#between range of ids 1 to 10

select * from users where id between 1 and 10 and id ;

#not in not return id 1 record
select * from users where id between 1 and 10 and id not in(1,10);


14)aggregate functions   ::: aggregates is a function that perform a calculation on a set of values and return a single value;

i)MIN()  : min () function return smallest value  of selected column.
ii)MAX() : max() function return the max value .
iii)count() :  count() return number of rows that matches specific criterio
iv) avg()  :: avg value of numeric column.
v)sum() :: sum of columns values 

#crate a products
create table products(id bigint primary key auto_increment,
productname varchar(100) not null,price decimal(10,2)); 
insert into products(productname,price) values ('chocolate',120) ,('biscuit',50) ,('chocolate',45) 

select * from products;

#min price 
select min(price) as MIN from products
#max()
select max(price) as MAX from products;

#count()
#total number of rows 
select count(*) as total from products
#price >20 return 
select count(price) as total from products where price >20
#distinct duplicate prices count as one 
select count(distinct price) as total from products;

#avg()
select avg(price) from products;

#sum()
select sum(price) from products;






EXERCISE
..........

#users
select * from users; #1,3,5

#projects

//CREATE THE TABLE for PROJECTS
create table projects(id int primary key auto_increment,projectname varchar(100) not null,user_id bigint ,
foreign key (user_id) references users(id) );

select * from projects;

insert into projects(projectname,user_id) values ('E-Commerce Projet',1)
,('Bank Project ',5) ,('Crm project ',3);

//CREATE THE TABLE for TASKS
create table tasks(id bigint primary key auto_increment,title varchar(100) not null,
status varchar(20) not null,due_date DATE,project_id int not null,
foreign key (project_id) references projects(id) );

select * from tasks;

insert into tasks(title,status,due_date,project_id) 
values ('create login api','completed','2026-09-28',1),
('create login api','pending','2026-08-28',1)
,('create login api','pending','2026-09-28',2) 
,('create login api','inprogress','2026-10-01',3),
('create authentication','inprogress','2026-10-01',1);

insert into tasks(title,status,due_date,project_id)
values ('create login api','pending','2026-08-28',1)

select * from tasks

#get all users

select * from users;

#find user by email;
select * from users where email='nayabrasool@gmil.com'

#get users project 

select * from projects where user_id in (1,3,5);

#get project tasks

select * from tasks where project_id=1;

## count tasks by status
select status,count(*) as task_count  from tasks group by status

#find overdue tasks
select * from tasks where due_date <= curdate() and status !='completed'

#pagination

select * from users order by id limit 10 offset 0;

#search user by name 

select * from users where name like 'm%'; #starting with m  
select * from users where name like '_%' #starting with any letter









*/