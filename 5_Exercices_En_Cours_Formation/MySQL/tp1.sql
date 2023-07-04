create database if not exists shop_db;
use shop_db;

create user 'admin'@'localhost' identified by 'adminpw';
grant all privileges on shop_db to 'admin';

create user 'developer'@'localhost' identified by 'adminpw';
grant create,drop,index,update on shop_db to 'developer';

flush privileges;

create table Customer (
id int primary key not null auto_increment,
username varchar(16) not null unique,
email varchar(255) not null unique,
password varchar(32) not null ,
create_time timestamp
);

create table Address (
id int primary key not null auto_increment,
road_number int,
road_name varchar(100) not null,
zip_code varchar(5) not null,
city_name varchar(100) not null,
country_name varchar(100) not null
);


create table `Order` (
id int primary key not null auto_increment,
ref varchar(45) not null unique,
date date not null,
shipping_cost decimal(6,2) default 0.00,
total_amount decimal(6,2)  default 0.00
);
-- ALTER TABLE `Order` ALTER shipping_cost SET DEFAULT 0.00;
-- ALTER TABLE `Order` ALTER total_amount SET DEFAULT 0.00;

create table Product (
ref char(20) primary key,
name varchar(100) not null,
price decimal(6,2) not null,
description longtext,
stock int DEFAULT 0
);
-- ALTER TABLE Product ALTER stock SET DEFAULT 0;

create table Order_Product (
ref_product char(20),
id_order int,
quantity int default 0,
FOREIGN KEY (ref_product) REFERENCES Product(ref),
FOREIGN KEY (id_order) REFERENCES `Order`(id) 
);

create table City (
id int primary key not null auto_increment,
zip_code varchar(5) not null,
city_name varchar(100) not null
);

create table Country (
id int primary key not null auto_increment,
country_name varchar(100) not null
);

alter table Address drop column city_name;
alter table Address drop column zip_code;
alter table Address drop column country_name ;

