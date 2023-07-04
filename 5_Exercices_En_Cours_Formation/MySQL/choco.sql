create database chocoblast;
use chocoblast;

create table User(
id_user int primary key not null auto_increment,
name_user varchar(50) not null,
firstname_user varchar(50) not null,
email_user varchar(50) not null,
password_user varchar(100) not null,
image_user varchar(100) not null,
status_user tinyint(1) not null,
id_roles int not null
);

create table Role(
id_role int primary key not null auto_increment,
name_role varchar(50) not null
);

create table Chocoblast(
id_chocoblast int primary key not null auto_increment,
slogan_chocoblast text not null,
date_creation_chocoblast date not null,
statut_chocoblast tinyint(1) not null,
target int not null,
author int not null
);

create table Comment(
id_comment int primary key not null auto_increment,
grade_comment int not null,
content_comment text not null,
date_creation_comment datetime not null,
status_comment tinyint(1),
id_chocoblast int,
author int
);


-- add constraints

