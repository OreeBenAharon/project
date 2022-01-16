create database IF NOT EXISTS project04;
use project04;

create table IF NOT EXISTS users (
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

create table IF NOT EXISTS categories (
	id int auto_increment,
	categ varchar(255),
	primary key(id)
);

create table IF NOT EXISTS products (
	id int auto_increment,
    title varchar(255),
    categ_id int,
    price int,
    pic varchar(255),
    primary key(id),
    foreign key (categ_id) references categories(id)
);

create table IF NOT EXISTS carts (
	id int auto_increment,
	user_id int,
    created datetime,
	primary key(id),
    foreign key (user_id) references users(id)
);

create table IF NOT EXISTS cart_products (
	id int auto_increment,
    product_id int,
    amount int,
    cart_id int,
    primary key(id),
	foreign key (product_id) references products(id),
    foreign key (cart_id) references carts(id)
);

create table IF NOT EXISTS orders (
	id int auto_increment,
    user_id int,
    cart_id int,
    total int,
    city varchar(255),
    street varchar(255),
    ordered_at datetime,
    date datetime,
    credit_card bigint,
    primary key(id),
	foreign key (user_id) references users(id)
    );
    
insert  into categories (categ)
VALUES ('Bread'),  ('Challah'), ('Special');  
    
-- insert IGNORE into categories (categ)
-- VALUES ('Bread',  'Challah', 'Special');  
    
insert into products (title, categ_id, price, pic)
VALUES ('Spelt Bread', 1, 24, 'https://bit.ly/37x7io2' )
,('Serials Bread', 1, 22, 'https://bit.ly/3s4VS4p' )
,('Rye Bread',1, 24, 'https://bit.ly/37x7RhE' )
,('Spelt Challa', 2, 16, 'https://bit.ly/3iAunwG' )
,('Sweet Challah', 2, 14, 'https://bit.ly/3xDIK7n' )
,('Olive Oil Brioche', 3, 25, 'https://bit.ly/2VIRsnY' )
,('Dorom Bread', 1, 20, 'https://bit.ly/2Xbl8e2' );


--     ALTER TABLE cart_products
 
-- 	ADD COLUMN user_id int AFTER cart_id ;
--     ALTER TABLE orders CHANGE ordered_at ordered_at datetime;

-- ALTER TABLE cart_products DROP COLUMN user_id;
-- ALTER TABLE orders MODIFY user_id;
-- ALTER TABLE orders MODIFY credit_card bigint;



SHOW GRANTS;
GRANT ALL ON defaultdb.* to 'doadmin'@'db-mysql-nyc3-46477-do-user-10481534-0.b.db.ondigitalocean.com';

ALTER USER 'doadmin'@'db-mysql-nyc3-46477-do-user-10481534-0.b.db.ondigitalocean.com' IDENTIFIED WITH mysql_native_password BY 'SJXpXrc9zold99yh';

create user 'someuser'@'db-mysql-nyc3-46477-do-user-10481534-0.b.db.ondigitalocean.com' identified by 'a123456789';

flush privileges;











