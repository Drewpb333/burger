CREATE DATABASE burgers_db;

USE burgers_db;

-- Heroku DB Name: rublno17sda3th0r
USE rublno17sda3th0r;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

