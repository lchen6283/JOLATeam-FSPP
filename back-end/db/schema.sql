DROP DATABASE IF EXISTS dev_smak;
CREATE DATABASE dev_smak;

\c dev_smak;

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    phonenumber CHAR(10)
);

CREATE TABLE order_history (
    id SERIAL PRIMARY KEY,
    date DATE,
    restaurant_id TEXT,
    customer_id INTEGER REFERENCES customer (id)
    ON DELETE CASCADE
);