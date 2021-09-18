CREATE DATABASE todo;

-- SERIAL = auto_increment
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(250)
);