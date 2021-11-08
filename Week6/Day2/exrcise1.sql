-- 1.SELECT * FROM items ORDER BY item_price ASC
-- 2.SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC
-- 3.SELECT first_name, last_name FROM customers  ORDER BY first_name ASC  LIMIT 3 
-- 4.SELECT last_name FROM customers  ORDER BY last_name DESC  

--  2.CREATE TABLE purchases ( 
-- 	 customer_id SMALLINT NOT NULL,  
-- 	 item_id SMALLINT NOT NULL,  
-- 	 FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
-- 	 FOREIGN KEY (item_id) REFERENCES items (item_id) 
--  );

-- 1.INSERT INTO purchases (customer_id, item_id) VALUES ((SELECT customer_id FROM customers WHERE customer_id = 1)))
--  ERROR:  INSERT has more target columns than expressions
-- LINE 14:  INSERT INTO purchases (customer_id, item_id) VALUES ((SELEC...

-- 2. INSERT INTO purchases (customer_id, item_id)VALUES
--      (1, 2),
--      (2, 2),
--  	(3, 3),
--  	(4 ,3),
--  	(5 ,2);
-- 3.
-- 1.no
-- 2.SELECT *
-- FROM purchases
-- INNER JOIN customers 
-- ON  customers.customer_id = purchases.customer_id;
-- 3.SELECT *
-- FROM purchases
-- INNER JOIN customers 
-- ON  customers.customer_id = purchases.customer_id WHERE purchases.customer_id =4;
-- 4.SELECT *
--   FROM purchases
--   INNER JOIN items 
--   ON  items.item_id = purchases.item_id WHERE purchases.item_id = 2 AND purchases.item_id = 1;
-- 4.INSERT INTO items(item_name,item_price)
--   VALUES('Hard Drive', 250)
--   INSERT INTO purchases(customer_id, item_id)
--   VALUES(3, 4)
-- 5.SELECT first_name, last_name , item_name
--  FROM purchases
-- INNER JOIN
--     customers ON customers.customer_id = purchases.customer_id
-- INNER JOIN
--     items ON items.item_id = purchases.item_id


