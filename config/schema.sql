CREATE DATABASE ome_db;
USE ome_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username Varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	name Varchar(255) NOT NULL,
    owner_id Int,
	type Varchar(255) NOT NULL,
	is_borrowed Boolean NOT NULL,
	FOREIGN KEY (owner_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE transactions
(
	id int NOT NULL AUTO_INCREMENT,
    owner_id int,
    borrower_id int,
    item_id int,
	due_date date not null,
	is_returned boolean NOT NULL,
	FOREIGN KEY (owner_id) REFERENCES users(id),
	FOREIGN KEY (borrower_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES items(id),
	PRIMARY KEY (id)
);