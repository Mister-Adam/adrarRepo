create database video_db;
use video_db;

create table users(
id_users int primary key auto_increment not null,
name_users varchar(50) not null,
firstname_users varchar(50) not null,
email_users varchar(50) not null,
password_users varchar(100) not null,
status_users tinyint(1) default 0 not null,
id_role_users int 
)Engine=InnoDB;


create table article(
id_article int primary key auto_increment not null,
title_article varchar(50) not null,
date_article datetime not null,
status_article bool not null,
id_category int ,
id_users int 
)Engine=InnoDB;

create table `comment`(
id_comment int primary key auto_increment not null,
message_comment varchar(200) not null,
date_comment datetime not null,
status_comment tinyint(1) default 0 not null,
id_article int not null,
id_users int not null
)Engine=InnoDB;

create table category(
id_category int primary key auto_increment not null,
name_category varchar(50) not null
)Engine=InnoDB;

create table media(
id_media int primary key auto_increment not null,
url_media varchar(100) not null
)Engine=InnoDB;

create table message(
id_message int primary key auto_increment not null,
content_message varchar(200) not null,
date_message datetime not null,
status_message bool
)Engine=InnoDB;


create table `role`(
id_role int primary key auto_increment not null,
name_role varchar(50) not null
)Engine=InnoDB;



