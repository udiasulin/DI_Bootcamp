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

-- 1.Create a table called orders and a table called items. You decide which fields should be in each table,
-- although make sure the items table has a column called price.

--  CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     order_number INTEGER,
--     description VARCHAR(100)
--  )

--   CREATE TABLE items (
--      item_id SERIAL PRIMARY KEY,
--      item_name VARCHAR(20),
--      description VARCHAR(100), 
-- 	  price DECIMAL,
--  	order_id INTEGER
--  	 REFERENCES orders(order_id)
--   )

--   CREATE or REPLACE FUNCTION total() 
--   RETURNS INTEGER AS $total$
--   BEGIN
--      RETURN(SELECT SUM(price) FROM orders RIGHT JOIN items ON orders.order_id = items.order_id WHERE orders.order_id =1);
--   END;
--   $total$ LANGUAGE plpgsql;
--   SELECT * FROM total()