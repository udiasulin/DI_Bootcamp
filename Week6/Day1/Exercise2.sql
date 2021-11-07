-- Database: bootcamp

-- DROP DATABASE bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

--  CREATE TABLE students(
--   students_id SERIAL PRIMARY KEY,
--    first_name VARCHAR (100) NOT NULL,
--   last_name VARCHAR (50) NOT NULL,
--   birth_date DATE NOT NULL
--  )

--  INSERT INTO students (first_name,last_name, birth_date)
--  VALUES
--      ('Marc', 'Benichou', '02/11/1998'),
-- 	 ('Yoan', 'Cohen', '03/12/2010'),
-- 	 ('Lea', 'Benichou', '27/07/1987'),
-- 	 ('Amelia', 'Dux', '07/04/1996'),
-- 	 ('David', 'Grez', '14/06/2003'),
-- 	 ('Omer', 'Simpson', '03/10/1980');

-- 1.SELECT * FROM students
-- 2.SELECT first_name,last_name FROM students
-- 3.SELECT first_name,last_name FROM students WHERE students_id = 2
-- 4.SELECT first_name,last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'
-- 5.SELECT first_name,last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou'
-- 6.SELECT first_name FROM students WHERE first_name LIKE '%a%'
-- 7.SELECT first_name FROM students WHERE first_name ILIKE 'a%'
-- 8.SELECT first_name FROM students WHERE first_name ILIKE '%a'
-- 9.SELECT first_name FROM students WHERE first_name ILIKE '__a%'
-- 10.SELECT first_name,last_name FROM students WHERE students_id = 1 AND students_id = 3
