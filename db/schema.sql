DROP DATABASE IF EXISTS barkingham_palace;

CREATE DATABASE barkingham_palace;

-- owner table --
-- CREATE TABLE owner (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL
-- )

-- -- dogs table --
-- CREATE TABLE dogs (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   breed VARCHAR(10),
--   -- set to one to only allow input of either s m l for sizes --
--   size VARCHAR(1),
--   -- describe what the caretakers need to know about the dog to take care of it -- 
--   description TEXT,
--   owner_id INT NOT NULL,
--   CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES owner(id) ON DELETE SET NULL
-- )

-- -- cats table -- 
-- CREATE TABLE cats (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   breed VARCHAR(10),
--   size VARCHAR(1),
--   description TEXT,
--   owner_id INT NOT NULL,
--   CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES owner(id) ON DELETE SET NULL
-- )


