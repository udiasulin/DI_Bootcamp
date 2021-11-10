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

-- 1.Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
-- SELECT  first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000

-- 2.Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
-- SELECT last_name, hire_date FROM employees
-- WHERE EXTRACT(YEAR FROM hire_date) = 1987

-- 3.Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
-- SELECT  first_name, last_name, salary FROM employees WHERE  first_name ILIKE '%c%' AND first_name ILIKE '%e%'

-- 4.Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks,
-- and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

-- SELECT  * FROM employees 
-- FULL JOIN jobs
-- ON employees.job_id = jobs.job_id
-- WHERE NOT job_title =  'Shipping Clerk' AND NOT job_title = 'Programmer'
-- AND NOT salary = 4500 AND NOT salary = 10000 AND NOT salary = 15000

-- 5.Write a query to display the last names of all employees whose last name contains exactly six characters.
-- SELECT  last_name FROM employees WHERE LENGTH(last_name) = 6 

-- 6. Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
-- SELECT last_name FROM employees WHERE last_name LIKE '__e%';

-- 7.Write a query to display the jobs/designations available in the employees table.
--  SELECT DISTINCT job_id  FROM employees;

-- 8.Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
-- SELECT *  FROM employees
-- WHERE last_name = 'JONES' OR last_name ILIKE 'BLAKE' OR last_name ILIKE 'SCOTT' OR last_name ILIKE 'KING' OR last_name ILIKE 'FORD'