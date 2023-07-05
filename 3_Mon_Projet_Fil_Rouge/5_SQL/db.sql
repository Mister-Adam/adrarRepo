create database amalgame;
use amalgame;

create table user(
id_user int primary key not null auto_increment
-- ip? some id
);

create table gamedata(
id_mostkill int,
id_nemesis int,
id_user int not null
);

create table monster(
id_monster int primary key not null,
name_monster varchar(50) not null unique,
description_monster text not null,
seen_monster tinyint(1) default 0 not null,
id_zone int not null
);

create table ability(
id_ability int primary key not null auto_increment,
name_ability varchar(50) not null unique
);

create table monster_abilities(
id_monster int not null,
id_ability int not null,
primary key (id_monster,id_ability)
);

create table zone(
id_zone int primary key not null auto_increment,
name_zone varchar(50) not null unique
);
-- constraints