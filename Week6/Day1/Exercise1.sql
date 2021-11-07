-- Database: public

-- DROP DATABASE public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- 	CREATE TABLE customers(
--  customer_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- )

--  INSERT INTO customers(first_name, last_name)
--  VALUES
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie','Johnson');

-- 	CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (100) NOT NULL,
--  item_price int NOT NULL
-- )

--    INSERT INTO items(item_name, item_price)
--   VALUES
--   ('Small Desk', 100),
--   ('Large desk', 300),
--   ('Fan',80);

-- 3.Use SQL to fetch the following data from the database
-- 1.SELECT * FROM items
-- 2.SELECT * FROM ITEMS WHERE ITEM_PRICE > 80
-- 3.SELECT * FROM ITEMS WHERE ITEM_PRICE < 300
-- 4.SELECT * FROM customers WHERE last_name LIKE '%smith%'
-- 5.SELECT * FROM customers WHERE last_name LIKE '%Jones%'
-- 6.SELECT * FROM customers WHERE last_name NOT LIKE '%Scott%'
