create database amalgame;
use amalgame;

create table user(
id_user int primary key not null auto_increment
);

create table gamedata(
-- id linked to user?
id_mostkill int,
id_nemesis int
);

create table monster(
id_monster int primary key not null,
name_monster varchar(50) not null unique,
description_monster text not null,
seen_monster tinyint(1),
id_ability int, -- multiples !!!
id_zone int
);

create table zone(
id_zone int primary key not null auto_increment,
name_zone varchar(50) not null unique
);

create table ability(
id_ability int primary key not null auto_increment,
name_ability varchar(50) not null unique
);