/*

1)relational ships:
……………………

>relationships define how data in different tables interact and connect with the one another.

>relationship establishing using the primary key (uniquely identify of row in a table) and foreign key( a table link to primary key of  another table  )

2)one to one:
……………

>each record in table A associated with one and only one record in table  B 

SYN:

User table 

Create table user(id int primary key auto_increment,name varchar(100) not null);

Userprofile

Create table userprofile(int pid primary key auto_increment,profiledata varchar(100) not null,
                                      user_id  int unique ,foreign key (user_id) reference user(id)); 

3)one to many ::
………………………..

>each records in table A  associated with the multiple records in table B. but each record in table b associate with one only one table A.


SYNX:

>create table departments(id int auto_increment primary key, dept_name varchar(100));

>create table employee(id int primary key auto_increment ,employee_name varchar(50) , department_id int , foreign key (department_id) reference departments(id);


4)many to many ::: one table A associated with many records of b.
…………………………..

Synx:

> student table
Create table student(int id auto_increment primary key , student_name varchar(100));

>course table

Create table courses(int id auto_increment primary key,course_name varchar(100));

>student course

Create table student_course(int student_id,int course_id ,primary key(student_id,course_id),foreign key(student_id) reference courses(id),
foreign key(course_id) reference student (id));


5)indexing   ::: indexing technique is used to make search and retrieve data faster

Types of indexing  :;;

I)primary key:  automatically created when define primary key (unique ,cannot be null)

Create table student(id int primary key,name varchar(100));

2)unique index  ::  the values in columns is   unique 

Syn: create index idx_email on student(email); /// duplicates are not allowed

3)index  :: mainly used for searches 

Syn:
………..

Create index stu on student(name);  // duplicates are allowed.

4) fulltext index  :: used for text searching ,especially large text columns 

Create FULLTEXT index ind_description on student(description)

5)spatial index  :: used for the spatial/geographical data ,such as coordinate and geometry 

Create SPATIAL index ind_location on place(location)

6)composite /multi column indexes  ::: index created on more than one column.

Create index ind_nameage on student(name,age);


7)

i)auto commit 

Select * from emp;
Delete from emp;

Set autocommit=off //transaction will not save automatically 

ii) commit ::
 Commit; //save the data 
Delete from emp; // delete the all the table data
Select * from emp; // it shows the null values 

Then retrieve data using rollback

iii)rollback ::  cancel current transaction  and restores database.

ROLLBACK;


















*/