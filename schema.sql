DROP DATABASE IF EXISTS notes_app;
create database notes_app;
use notes_app;

create table notes(
  id int primary key auto_increment,
  title varchar(20) not null,
  content text ,
  created timestamp default now()
);

insert into notes(title , content)
values 
("play football", "playing footbal with my friends"),
("learn java ", "study oop and design pattrans ");