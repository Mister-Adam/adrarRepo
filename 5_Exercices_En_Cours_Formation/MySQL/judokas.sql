create database if not exists judo_db;
use judo_db;
-- create user if not exists 'admin'@'localhost' identified by 'adminpw';
-- grant all privileges on judo_db.* to 'admin'@'localhost';
-- flush privileges;

create table Judokas (
id int primary key not null auto_increment, 
name varchar(50) not null ,
surname varchar(50) not null ,
age tinyint not null,
sex tinyint(1) not null,
id_belt int
);

create table Belt(
id int primary key not null auto_increment, 
color varchar(50) not null
);


create table Competition(
id int primary key not null auto_increment, 
name varchar(50) not null,
dateBegin datetime not null,
dateEnd datetime not null
);
create table Judokas_Competition(
id_judoka int,
id_competition int,
primary key(id_judoka, id_competition)
);

alter table Judokas add CONSTRAINT fk_id_belt FOREIGN KEY (id_belt) REFERENCES Belt(id);
alter table Judokas_Competition add CONSTRAINT fk_id_judoka FOREIGN KEY (id_judoka) REFERENCES Judokas(id);
alter table Judokas_Competition add CONSTRAINT fk_id_competition FOREIGN KEY (id_competition) REFERENCES  Competition(id);
