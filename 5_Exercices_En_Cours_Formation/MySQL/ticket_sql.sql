-- créer la base de données

create database ticket;
use ticket;

-- créer les tables

create table product(
id_product int primary key auto_increment not null,
name_product varchar(50) not null,
description_product text not null,
price_product float not null,
id_category int not null
)Engine=InnoDB;

create table category(
id_category int primary key auto_increment not null,
name_category varchar(50) not null
)Engine=InnoDB;

create table receipt(
id_receipt int primary key auto_increment not null,
date_receipt datetime not null,
id_seller int not null
)Engine=InnoDB;

create table seller(
id_seller int primary key auto_increment not null,
name_seller varchar(50) not null,
first_name_seller varchar(50) not null
)Engine=InnoDB;

create table to_add(
id_product int not null,
id_receipt int not null,
qtx_add int not null,
primary key(id_product, id_receipt)
)Engine=InnoDB;

-- Ajouter les contraintes Foreign key

alter table product
add constraint fk_completer_category
foreign key(id_category)
references category(id_category);

alter table receipt
add constraint fk_vendre_seller
foreign key(id_seller)
references seller(id_seller);

alter table to_add
add constraint fk_ajouter_produit
foreign key(id_product)
references product(id_product),
add constraint fk_ajouter_ticket
foreign key(id_receipt)
references receipt(id_receipt);

insert into category (name_category)
values ("alimentaire"),("produit"),("loisir");

insert into product (name_product,description_product,price_product,id_category )
values ("tomate","paquet de 3kg de tomate", 4.20,1),
("pain", "baguette de pain de 350 gr", 0.90, 1),
("lessive", "paquet de lessive de 1 kg", 14.30, 2),
("livre", "livre sur le cinéma", 29.99, 3);

insert into seller(name_seller,firstname_seller)
values ("Dupond","Sophie"),("Albert","Marc");

insert into receipt(date_receipt,id_seller)
values ("2023-02-03", 1),("2023-05-06", 2), ("2023-07-14", 2);

insert into toadd(id_product, id_receipt,qtx_add)VALUES
(2,13,5),(1,15,2),(3,14,1),(4,13,2);

UPDATE category SET name_category = 'alimentation'
WHERE name_category = "alimentaire";

UPDATE category SET name_category = 'autre'
WHERE id_category = 2;

UPDATE product SET price_product = 34.99
WHERE name_product = "livre";

UPDATE product SET description_product = "Lessive liquide 40 lavages"
WHERE name_product = "lessive";

UPDATE product SET price_product = price_product+1;
-- WHERE name_product = "lessive";

UPDATE seller 
SET name_seller = "Dupont",
	firstname_seller = "Anne"
WHERE id_seller = 1;

UPDATE seller 
SET firstname_seller = "Maxime"
WHERE name_seller = "Albert";

UPDATE receipt 
SET date_receipt = "2023-06-23"
WHERE id_receipt = 14;

UPDATE receipt 
SET id_seller = 1
WHERE date_receipt = "2023-07-14";

UPDATE toadd 
SET qtx_add = qtx_add+2
WHERE id_product = 13;

Update toadd
SET id_product = 
(select id_product from product where name_product ="lessive")
WHERE id_receipt = 15 
and id_product = (select id_product from product where name_product ="tomate");

Update toadd
SET qtx_add = 5
WHERE id_receipt = 15 
and id_product = (select id_product from product where name_product ="lessive");


select id_category, name_category from category 
where left(name_category,1) > "a";

select id_product, name_product, price_product from product 
where price_product < 20;

select id_receipt, date_receipt, id_seller from receipt 
where date_receipt = "2023-02-03";

select name_seller as nom, firstname_seller as prenom from seller;


