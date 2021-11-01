create database project04;
use project04;

create table users (
	id int,
    fname varchar(255),
    lname varchar(255),
    username varchar(255),
    password varchar(255),
    city varchar(255),
    street varchar(255),
    admin boolean,
    primary key(id)
);

create table categories (
	id int auto_increment,
	categ varchar(255),
	primary key(id)
);

create table products (
	id int auto_increment,
    title varchar(255),
    categ_id int,
    price int,
    pic varchar(255),
    primary key(id),
    foreign key (categ) references categories.id
);

create table carts (
	id int auto_increment,
	user_id int,
    created datetime,
	primary key(id),
    foreign key (user_id) references users.id
);

create table cart_products (
	id int auto_increment,
    product_id int,
    amount int,
    cart_id int,
    primary key(id),
	foreign key (product_id) references products.id,
    foreign key (cart_id) references carts.id
);

create table orders (
	id int auto_increment,
    user_id int,
    cart_id int,
    total int,
    city varchar(255),
    street varchar(255),
    ordered_at datetime,
    date datetime,
    street varchar(255),
    credit_card int,
    primary key(id),
	foreign key (user_id) references users.id);
    
insert into categories (categ)
VALUES ("Bread",  "Challah", "Special");  
    
insert into products (title,categ,price,pic)
VALUES ("Spelt Bread",1,24, "https://bit.ly/37x7io2" )
,("Serials Bread",1,22, "https://bit.ly/3s4VS4p" )
,("Rye Bread",1,24, "https://bit.ly/37x7RhE" )
,("Spelt Challa",2,16, "https://bit.ly/3iAunwG" )
,("Sweet Challah",2,14, "https://bit.ly/3xDIK7n" )
,("Olive Oil Brioche",3,25, "https://bit.ly/2VIRsnY" )
,("Dorom Bread",1,20, "https://bit.ly/2Xbl8e2" );

    ALTER TABLE cart_products
 
	ADD COLUMN user_id int AFTER cart_id ;
    ALTER TABLE orders CHANGE ordered_at ordered_at datetime;

ALTER TABLE cart_products DROP COLUMN user_id;










