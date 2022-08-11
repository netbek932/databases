-- CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
-- DROP TABLE IF EXISTS messages;
-- REPAIR TABLE messages;

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  message VARCHAR(120) NOT NULL,
  id_user INTEGER,
  id_rooms INTEGER,
  PRIMARY KEY (id)
);

-- ---
-- Table 'users'
--
-- ---

-- DROP TABLE IF EXISTS users;
-- REPAIR TABLE users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'rooms'
--
-- ---

-- DROP TABLE IF EXISTS rooms;
-- REPAIR TABLE rooms;

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE messages ADD FOREIGN KEY (id_user) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (id_rooms) REFERENCES rooms (id);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

