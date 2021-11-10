-- Database: dvdrental

-- DROP DATABASE dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.SELECT film.title, language.name
-- FROM film 
-- INNER JOIN language
-- ON film.language_id = language.language_id
-- GROUP BY film.title,language.name;

-- 2.
-- 1.SELECT film.title, language.name, film.description
-- FROM film 
-- LEFT JOIN language
-- ON film.language_id = language.language_id
-- GROUP BY film.title,language.name, film.description;

-- 2.SELECT film.title, language.name, film.description
-- FROM film 
-- RIGHT JOIN language
-- ON film.language_id = language.language_id
-- GROUP BY film.title,language.name, film.description;

-- 3. CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) NOT NULL
-- )

-- 4.CREATE TABLE reviews(
-- 	review_id SERIAL PRIMARY KEY,
-- 	film_id_fk INTEGER NOT NULL
-- 	REFERENCES new_film(new_film_id)
-- 	ON DELETE CASCADE 
--     ON UPDATE CASCADE,
	
-- 	language_id_fk INTEGER NOT NULL
-- 	REFERENCES language(language_id)
-- 	ON DELETE CASCADE 
--     ON UPDATE CASCADE,
	
-- 	title VARCHAR(50) NOT NULL,
-- 	score INTEGER check (score between 1 and 10),
-- 	review_text TEXT,
-- 	last_update DATE
-- )

-- 5. INSERT INTO reviews (film_id_fk, language_id_fk, title, score, review_text, last_update)
--   VALUES
--   (
--   (SELECT new_film_id FROM new_film WHERE name = 'Mad Max'),
--   (SELECT language_id FROM language WHERE name ='English'),
--   'not bad', 5,'the movie is OK', '2021.11.10'
--  ),
-- (
--  (SELECT new_film_id FROM new_film WHERE name ='The thing'),
--  (SELECT language_id FROM language WHERE name ='English'),
--  'the movie is bad', 2,'dont see this movie', '2021.11.10'
-- )

-- 6.DELETE FROM new_film WHERE name='The thing';
-- SELECT * FROM reviews
-- it was deleted from the review table too