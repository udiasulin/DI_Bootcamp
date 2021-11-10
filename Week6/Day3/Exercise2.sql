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

-- 1.UPDATE film
--    SET  language_id = 4
--    WHERE rental_duration = 6;

-- 2. Which foreign keys (references) are defined for the customer table? 
-- How does this affect the way in which we INSERT into the customer table?
--  store_id , address_id we need to enter id that exist

-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
--  easy step - other tables are not depended on the customer_reviews table

-- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count(rental_id) from rental where return_date is null

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet) 
--  select title,replacement_cost from film 
--  inner join inventory on film.film_id = inventory.film_id
--  inner join rental on rental.inventory_id = inventory.inventory_id
--  where return_date is null 
--  order by replacement_cost DESC limit 30

-- 6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
-- but he can’t remember their names. Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- 1.SELECT title, description, actor.first_name,actor.last_name
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON actor.actor_id=film_actor.actor_id
-- WHERE actor.first_name = 'Penelope' AND  actor.last_name = 'Monroe' AND description ILIKE '%sumo wrestler%'

--2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT * FROM film WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%'

-- 3. The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
--  SELECT  title FROM film
--  INNER JOIN inventory ON inventory.film_id = film.film_id
--  INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
--  INNER JOIN customer ON rental.customer_id = customer.customer_id
--  INNER JOIN payment ON payment.customer_id = customer.customer_id
--  WHERE customer.first_name='Matthew' AND customer.last_name='Mahan' AND amount > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- 4. His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description,
-- and it looked like it was a very expensive DVD to replace.

--  SELECT title, description , replacement_cost FROM film
--  INNER JOIN inventory ON inventory.film_id=film.film_id
--  INNER JOIN rental ON inventory.inventory_id= rental.inventory_id
--  INNER JOIN customer ON rental.customer_id = customer.customer_id
--  WHERE customer.first_name='Matthew' AND customer.last_name='Mahan' AND 
--  title ILIKE '%boat%' OR description ILIKE '%boat' ORDER BY replacement_cost DESC