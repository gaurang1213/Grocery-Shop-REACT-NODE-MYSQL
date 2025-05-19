CREATE DATABASE grocery_shop;

USE grocery_shop;

CREATE TABLE Consumer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    price DECIMAL(10,2),
    image VARCHAR(255)
);

INSERT INTO Items (name, description, price, image) VALUES
('Apple', 'Fresh red apples', 120.00, 'https://via.placeholder.com/200?text=Apple'),
('Banana', 'Organic bananas', 60.00, 'https://via.placeholder.com/200?text=Banana'),
('Milk', 'Dairy milk 1L', 50.00, 'https://via.placeholder.com/200?text=Milk');
