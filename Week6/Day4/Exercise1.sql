-- Database: hr.backup

-- DROP DATABASE "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.
-- SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees

-- 2.Write a query to get unique departments ID from the employee table (ie. without duplicates).
-- SELECT DISTINCT department_id FROM employees

-- 3. Write a query to get the details of all employees from the employee table, do so in descending order by first name.
-- SELECT * FROM employees ORDER BY first_name DESC

-- 4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
-- SELECT first_name, last_name , salary , salary * 0.15 as PF FROM employees 
-- Group By first_name, last_name , salary

-- 5.Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
-- SELECT  employee_id, first_name, last_name FROM employees ORDER BY salary ASC

-- 6.Write a query to get the total sum of all salaries paid to the employees.
-- SELECT  SUM(salary) FROM employees  

-- 7.Write a query to get the maximum and minimum salaries paid to the employees.
-- SELECT  MAX(salary), MIN(salary) FROM employees 

-- 8.Write a query to get the average salary paid to the employees.
-- SELECT  AVG(salary) FROM employees

-- 9.Write a query to get the number of employees working in the company.
--  SELECT  COUNT(*) FROM employees

-- 10.Write a query to get all the first names from the employees table in upper case.
--  SELECT  UPPER(first_name) FROM employees

-- 11.Write a query to get the first three characters of each first name of all the employees in the employees table.
-- SELECT  SUBSTRING(first_name, 1, 3) FROM employees

-- 12.Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
-- SELECT CONCAT(first_name, last_name)  AS full_name FROM employees 

-- 13.Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
-- SELECT first_name, last_name ,LENGTH(first_name) + LENGTH(last_name) FROM employees 

-- 14.Write a query to check whether the first_name column of the employees table contains any numbers.
-- SELECT * FROM employees WHERE first_name LIKE '%[0-9]%'

-- 15.Write a query to select the first ten records from a table.
-- SELECT * FROM employees LIMIT 10