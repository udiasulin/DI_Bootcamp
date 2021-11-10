-- Database: Daily_Challenge

-- DROP DATABASE "Daily_Challenge";

-- CREATE DATABASE "Daily_Challenge"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE customer (
--    customer_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(20)
-- )

--  CREATE TABLE cutomer_profile (
--     cutomer_profile_id SERIAL PRIMARY KEY,
--     customer_id_fk INTEGER  NOT NULL 
-- 	   REFERENCES customer (customer_id)
--     ON DELETE CASCADE 
--     ON UPDATE CASCADE,
--     address VARCHAR(20)
--  )

--  CREATE TABLE product (
--     product_id SERIAL PRIMARY KEY,
--  	name VARCHAR(20)
--  )

--   CREATE TABLE orderes (
--      customer_id_fk INTEGER  NOT NULL 
--  	 REFERENCES customer (customer_id)
--      ON DELETE CASCADE 
--      ON UPDATE CASCADE,
	  
-- 	 product_id_fk INTEGER  NOT NULL 
--  	 REFERENCES customer (customer_id)
--      ON DELETE CASCADE 
--      ON UPDATE CASCADE,
--      description VARCHAR(20),
-- 	  PRIMARY KEY (customer_id_fk , product_id_fk)
--   )
-- INNER JOIN cutomer_profile ON customer.customer_id = customer_profile.customer_id_fk

-- SELECT * 
-- FROM customer_profile
-- LEFT JOIN customer ON customer.customer_id = customer_profile.customer_profile_id

-- SELECT * 
-- FROM customer_profile
-- RIGHT JOIN customer ON customer.customer_id = customer_profile.customer_profile_id

-- SELECT * 
-- FROM customer_profile
-- INNER JOIN customer ON customer.customer_id = customer_profile.customer_profile_id

-- SELECT * 
-- FROM customer_profile
-- INNER JOIN customer ON customer.customer_id = customer_profile.customer_profile_id


-- SELECT * 
-- FROM orders
-- LEFT JOIN customer ON customer.customer_id = orders.customer_id_fk
-- LEFT JOIN product ON product.product_id = orders.product_id_fk


--  SELECT * 
--  FROM orders
--  RIGHT JOIN customer ON customer.customer_id = orders.customer_id_fk
--  RIGHT JOIN product ON product.product_id = orders.product_id_fk
 
--  SELECT * 
--  FROM orders
--  INNER JOIN customer ON customer.customer_id = orders.customer_id_fk
--  INNER JOIN product ON product.product_id = orders.product_id_fk
 
-- SELECT * 
-- FROM orders
-- FULL JOIN customer ON customer.customer_id = orders.customer_id_fk
-- FULL JOIN product ON product.product_id = orders.product_id_fk