create database magasin;
use magasin;

create table Product (
id_product int primary key not null auto_increment,
name_product varchar(50) not null,
description_product text not null,
price_product real not null,
id_category int not null
);

create table Receipt(
id_receipt int primary key not null auto_increment,
date_receipt datetime not null,
id_seller int not null
);

create table ToAdd(
id_product int not null,
id_receipt int not null,
primary key(id_product, id_receipt)
);

create table Category (
id_category int primary key not null auto_increment,
name_category varchar(50) not null,
qtx_add int not null
);

create table Seller(
id_seller int primary key not null auto_increment,
name_seller varchar(50) not null,
firstname_seller varchar(50) not null
);

alter table Product 
add constraint fk_id_category 
foreign key (id_category) 
references Category(id_category);

alter table Receipt
add constraint fk_id_seller 
foreign key (id_seller) 
references Seller(id_seller);

alter table ToAdd
add constraint fk_id_product
foreign key (id_product)
references Product(id_product);

alter table ToAdd
add constraint fk_id_receipt
foreign key (id_receipt)
references Receipt(id_receipt);

