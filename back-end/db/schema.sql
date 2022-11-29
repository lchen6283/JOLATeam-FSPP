DROP DATABASE IF EXISTS dev_smak;
CREATE DATABASE dev_smak;

\c dev_smak;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    phonenumber CHAR(10),
    username varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    gary_points INT,
    avatar varchar(255),
    is_active BOOLEAN,
    role INT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    restaurant_ID TEXT,
    date DATE,
    delivery_address TEXT,
    total_cost INT,
    userid INTEGER REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users (id),
    orderid INTEGER REFERENCES orders (id),
    rating smallint not null check (rating between 1 and 5),
    content TEXT NOT NULL,
    img_url TEXT,
    date DATE
);

CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
   cuisine TEXT NOT NULL 
);

CREATE TABLE plates (
    id SERIAL PRIMARY KEY,
    menuid INTEGER REFERENCES menus (id),
    dish_type TEXT NOT NULL,
    name TEXT NOT NULL
);
