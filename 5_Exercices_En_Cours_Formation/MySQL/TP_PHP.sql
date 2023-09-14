create database articles;
use articles; 


create table article(
id_article int primary key not null auto_increment,
nom_article varchar(50) not null ,
contenu_article varchar(250) not null,
id_category int not null
)engine=innodb;

create table category(
id_category int primary key not null auto_increment,
nom_category varchar(50) not null 
)engine=innodb;

-- alter table article 
-- add id_category int not null;

alter table article
add constraint fk_have_category
foreign key(id_category)
references category(id_category);

