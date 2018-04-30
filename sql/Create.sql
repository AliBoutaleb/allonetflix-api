CREATE database allonetflix;

# Sequences
CREATE SEQUENCE id_member start 1 increment 1;

# Tables
CREATE TABLE Member
(
    id INT PRIMARY KEY NOT NULL,
    lastname VARCHAR(100),
    firstname VARCHAR(100),
    email VARCHAR(255),
    pseudonyme VARCHAR (100),
    password VARCHAR(100),
    birthdate DATE,
    country VARCHAR(255),
    registerDate DATE,
    lastUpdateDate DATE,
    gender VARCHAR(10)
);