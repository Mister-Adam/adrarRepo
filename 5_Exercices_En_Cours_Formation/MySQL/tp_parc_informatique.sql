create database tpParcInformatique;
use tpParcInformatique;


-- re do it with precise names (name_utilisateur)




create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom varchar(50) not null,
prenom varchar(50) not null,
age int not null,
email varchar(50) not null,
password varchar(100) not null,
id_poste int not null
)Engine=InnoDB;

create table poste(
id_poste int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table ticket(
id_ticket int primary key auto_increment not null,
nom varchar(50) not null,
description text not null,
date_ouverture datetime not null,
date_fermeture datetime not null,
id_logiciel int not null,
id_type_ticket int not null,
id_statut int not null,
id_materiel int not null,
id_utilisateur int not null
)Engine=InnoDB;

create table type_ticket(
id_type_ticket int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table statut(
id_statut int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table intervention(
id_intervention int primary key auto_increment not null,
nom varchar(50) not null,
description text not null,
date_intervention datetime not null,
duree time not null,
verifie bool not null,
id_utilisateur int not null,
id_ticket int not null
)Engine=InnoDB;


create table solution(
id_solution int primary key auto_increment not null,
nom varchar(50) not null,
description text not null,
date_creation datetime not null,
date_modification datetime not null,
id_type_solution int not null,
id_materiel int not null,
id_logiciel int not null,
id_utilisateur int not null
)Engine=InnoDB;

create table type_solution(
id_type_solution int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table materiel(
id_materiel int primary key auto_increment not null,
nom varchar(50) not null,
description text not null,
spare bool not null,
quantite int not null,
id_fabricant int not null,
id_type_materiel int not null
)Engine=InnoDB;

create table type_materiel(
id_type_materiel int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table fabricant(
id_fabricant int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;

create table logiciel(
id_logiciel int primary key auto_increment not null,
nom varchar(50) not null,
description text not null,
quantite int not null,
id_editeur int not null
)Engine=InnoDB;

create table editeur(
id_editeur int primary key auto_increment not null,
nom varchar(50) not null
)Engine=InnoDB;


alter table ticket
add constraint fk_posseder_statut
foreign key(id_statut)
references statut(id_statut);

alter table ticket
add constraint fk_detailler_type_ticket
foreign key(id_type_ticket)
references type_ticket(id_type_ticket);

alter table logiciel
add constraint fk_editer_logiciel
foreign key(id_editeur)
references editeur(id_editeur);

alter table materiel
add constraint fk_completer_type_materiel
foreign key(id_type_materiel)
references type_materiel(id_type_materiel);

alter table materiel
add constraint fk_fabriquer_materiel
foreign key(id_fabricant)
references fabricant(id_fabricant);

alter table utilisateur
add constraint fk_occuper_poste
foreign key(id_poste)
references poste(id_poste);

alter table intervention
add constraint fk_ajouter_intervention
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);

-- manque table assos et une ou deux fk

insert into fabricant (nom)
values("acer"), ("nvidia"), ("gigabyte");
insert into type_materiel(nom)
values("ecran"), ("pc portable"), ("desktop"), ("clavier"), ("souris");
insert into poste(nom)
values ("DevJunior");

insert into utilisateur (nom, prenom,age,email,password,id_poste)
values ("Hab","Antoine",27,"voute@adrar.com","etalonDuQ69",1),
("Sal","Rémi",32,"remimi@adrar.com","carapuceD0dge",1);

insert into editeur(nom)
values("microsoft"),("oracle");

insert into logiciel(nom, description, quantite, id_editeur)
values("photoshop", "photo", 12, 1), ("word", "texte", 5, 1), ("apache", "bdd", 4, 2);

insert into ticket(nom,description,date_ouverture,date_fermeture,id_logiciel,id_type_ticket,id_statut,id_materiel,id_utilisateur)
values();

insert into intervention (nom,description,date_intervention,duree,verifie,id_utilisateur,id_ticket)
values ("intrv1","RAS",2023-08-24, '00:35:00', TRUE,1,1);

SELECT id_utilisateur from intervention ORDER BY id_utilisateur DESC LIMIT 1;
