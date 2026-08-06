CREATE DATABASE sms_db;
USE sms_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  roll VARCHAR(50),
  course VARCHAR(100)
);