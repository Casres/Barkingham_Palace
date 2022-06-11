DROP DATABASE IF EXISTS barkingham_palace;
CREATE DATABASE barkingham_palace;\

USE barkingham_palace;

DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS owners;


CREATE TABLE owners (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

CREATE TABLE dogs (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  breed VARCHAR(30) NULL,
  -- set to one to only allow input of either s m l for sizes --
  size VARCHAR(1),
  -- describe what the caretakers need to know about the dog to take care of it -- 
  description TEXT,
  dog_owner_id INTEGER NOT NULL,
  CONSTRAINT fk_dog_owner_id FOREIGN KEY (dog_owner_id) REFERENCES owners(id) ON DELETE CASCADE
);

CREATE TABLE cats (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  breed VARCHAR(30) NULL,
  size VARCHAR(1),
  description TEXT,
  cat_owner_id INTEGER NOT NULL,
  CONSTRAINT fk_cat_owner_id FOREIGN KEY (cat_owner_id) REFERENCES owners(id) ON DELETE CASCADE
);


