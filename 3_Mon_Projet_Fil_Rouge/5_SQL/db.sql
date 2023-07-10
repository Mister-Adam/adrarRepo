create database amalgame;
use amalgame;

create table user(
id_user int primary key not null auto_increment,
key_user varchar(250) not null unique 
-- ip? some id
);

create table gamedata(
id_gamedata int primary key not null auto_increment,
datetime_update_gamedata datetime,
ingame_time_gamedata time
);

create table monster(
id_monster int primary key not null,
name_monster varchar(50) not null unique,
amount_killed_monster int unsigned default 0,
amount_died_to_monster int unsigned default 0,
id_arena int not null,
id_rank int not null,
id_class int not null
);

create table arena(
id_arena int primary key not null auto_increment,
name_arena varchar(50) not null
);

create table monster_rank(
id_monster_rank int primary key not null auto_increment,
name_monster_rank varchar(50) not null
);

create table monster_class(
id_monster_class int primary key not null auto_increment,
name_monster_class varchar(50) not null
);

create table ability(
id_ability int primary key not null auto_increment,
name_ability varchar(50) not null,
description_ability varchar(255) not null
);

create table monster_abilities(
id_monster int not null,
id_ability int not null,
primary key (id_monster,id_ability)
);

create table monster_data(
id_monster int not null,
id_game_data int not null,
primary key (id_monster,id_game_data)
);


-- constraints