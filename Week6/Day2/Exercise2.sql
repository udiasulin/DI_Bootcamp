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

-- 1.SELECT * FROM customer
-- 2.SELECT first_name,last_name AS full_name
-- FROM customer;
-- 3.SELECT create_date FROM customer
-- 4.SELECT * FROM customer ORDER BY first_name DESC
-- 5.SELECT film_id, title, description,release_year, rental_rate FROM film ORDER BY rental_rate ASC 
-- 6.SELECT address,phone FROM address WHERE district ='Texas'
-- 7.SELECT * FROM film WHERE film_id = 15 OR film_id = 150
-- 8.SELECT  film_id, title, description,length, rental_rate FROM film WHERE title = 'The gray'
-- 9.SELECT  film_id, title, description,length, rental_rate FROM film WHERE title ILIKE '%th%'
-- 10.SELECT * FROM film ORDER BY replacement_cost ASC LIMIT  10
-- 11.SELECT * FROM film  WHERE replacement_cost < 10 ORDER BY replacement_cost ASC  OFFSET 10  
-- 12. SELECT amount, payment_date
--  FROM payment
--  FULL JOIN customer
--  ON customer.customer_id = payment.payment_id
-- 13.  SELECT * FROM film 
--  WHERE film.film_id NOT IN (SELECT film_id FROM inventory)
-- 14.SELECT city,country,city.country_id, country.country_id
--    FROM city
--   FULL JOIN country
--   ON city.country_id = country.country_id 

