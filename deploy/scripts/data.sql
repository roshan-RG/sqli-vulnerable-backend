CREATE DATABASE IF NOT EXISTS sqli;


USE sqli;

CREATE TABLE news ( Id INT PRIMARY KEY, Title VARCHAR(64),
	Body VARCHAR(1024),
	Datetime VARCHAR(64)
);

CREATE TABLE users (
	Email VARCHAR(32),
	Name VARCHAR(64),
	Password VARCHAR(64),
	AccountId INT
);

INSERT INTO news (Id, Title, Body, Datetime)
VALUES (1,
	"Boletin informativo",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic dolor, tempore, asperiores corporis quos perspiciatis",
	"05/10/2014 12:12:12"
);

INSERT INTO news (Id, Title, Body, Datetime)
VALUES (2,
	"Boletin informativo 2",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic dolor, tempore, asperiores corporis quos perspiciatis",
	"06/10/2014 12:12:12"
);

INSERT INTO users (Email, Name, Password, AccountId)
VALUES ("admin@admin.com",
	"Administrador",
	"root1234",
	1
);

INSERT INTO users (Email, Name, Password, AccountId)
VALUES ("juan@test.com",
	"Juan",
	"juan1234",
	2
);

