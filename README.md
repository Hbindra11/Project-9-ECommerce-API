# Project 9: eCommerce API

## Description
This project is an eCommerce API built with Node.js. It provides endpoints for managing products, users, orders, and more.

## Features
- PostgreSQL database with Sequelize models
- Body validation with JOI
- CRUD operations for products and orders
- Products cannot be created if category doesn’t exist (this implies an association)
- Orders cannot be created if user and products don’t exist. (this implies an association)
- Postman collection with sample requests and responses

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- JOI schema description language and data validator for JavaScript

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Project-9-eCommerce-API.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Project-9-eCommerce-API
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Access the API at `http://localhost:3000`.

## API Endpoints
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | /api/customers    | Get all customers          |
| POST   | /api/customers    | Create a new customer      |
| PUT   | /api/customers/id    | update a specific customer data  |
| DELETE   | /api/customers/id    | delete a specific customer data  |
| GET   | /api/customers/id    | get data of a specific customer  |
| |||
| GET    | /api/products    | Get all products          |
| POST   | /api/products    | Create a new product      |
| PUT   | /api/products/id    | update a specific product data  |
| DELETE   | /api/products/id    | delete a specific product data  |
| GET   | /api/products/id    | get data of a specific product  |
| |||
| GET    | /api/categories    | Get all categories          |
| POST   | /api/categories    | Create a new category      |
| PUT   | /api/categories/id    | update a specific category data  |
| DELETE   | /api/categories/id    | delete a specific category data  |
| GET   | /api/categories/id    | get data of a specific category  |
| |||
| GET    | /api/orders      | Get all orders            |
| POST   | /api/orders      | Create a new order        |
| PUT   | /api/orders/id    | update a specific order data  |
| DELETE   | /api/orders/id    | delete a specific order data  |
| GET   | /api/orders/id    | get data of a specific order  |

