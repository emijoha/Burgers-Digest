CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	digested BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE bobs_burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_pun varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
