# Car Store Server

This is the **Car Store Server**, a backend API for managing cars in a store and processing orders, built with **Express**, **Mongoose**, **TypeScript**, and the **Color** npm package, following the **modular pattern**. This server provides **CRUD operations** for managing cars and functionality to create orders.

## Technologies Used

- **Express.js**: Web framework for building RESTful APIs
- **Mongoose**: MongoDB Object Data Modeling (ODM) to interact with MongoDB
- **TypeScript**: Superset of JavaScript that provides static typing
- **Color**: npm package for coloring console output
- **MongoDB**: NoSQL database for storing car and order data

## Features

- **CRUD operations for Cars**:
  - Add a new car to the inventory
  - Retrieve all cars or a specific car
  - Update existing car details
  - Remove a car from the inventory
- **Order management**:
  - Create a new order for a car

# Car Management API

This API provides endpoints for managing cars and orders. You can perform operations like creating, retrieving, updating, and deleting cars, as well as placing orders and calculating revenue from orders.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [Create a Car](#create-a-car)
  - [Get All Cars](#get-all-cars)
  - [Get a Specific Car](#get-a-specific-car)
  - [Update a Car](#update-a-car)
  - [Delete a Car](#delete-a-car)
  - [Order a Car](#order-a-car)
  - [Calculate Revenue from Orders](#calculate-revenue-from-orders)
- [Authentication](#authentication)
- [Usage Example](#usage-example)
- [Error Codes](#error-codes)
- [License](#license)

## #api-endpoints

### 1. #create-a-car

- **Endpoint**: `/api/cars`
- **Method**: `POST`
- **Description**: Creates a new car in the system.
- **Request Body**:

  ```json
  {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true
  }
  ```

### 2. Get All Cars

- **Endpoint**: `/api/cars`

- **Method**: `GET`
- **Description**: A list of all cars with details like brand, model, price, category, etc.
- **Response**:

  ```json
  {
    "message": "Cars retrieved successfully",
    "status": true,
    "data": [
      {
        "_id": "648a45e5f0123c45678d9012",
        "brand": "Toyota",
        "model": "Camry",
        "year": 2024,
        "price": 25000,
        "category": "Sedan",
        "description": "A reliable family sedan with modern features.",
        "quantity": 50,
        "inStock": true,
        "createdAt": "2024-11-19T10:23:45.123Z",
        "updatedAt": "2024-11-19T10:23:45.123Z"
      }
    ]
  }
  ```

  ### 3. Get a Specific Car

- **Endpoint**: `/api/cars/:carId`
- **Method**: `GET`
- **Description**: Response: The details of a specific car by ID.
- **Response**:

  ```json
  {
    "message": "Car retrieved successfully",
    "status": true,
    "data": {
      "_id": "648a45e5f0123c45678d9012",
      "brand": "Toyota",
      "model": "Camry",
      "year": 2024,
      "price": 25000,
      "category": "Sedan",
      "description": "A reliable family sedan with modern features.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
  }
  ```

  ### 4. Update a Car

- **Endpoint**: `/api/cars/:carId`
- **Method**: `PUT`
- **Description**: Request Body: (Car details to update)
- **Request body**:

  ```json
  {
    "price": 27000,
    "quantity": 30
  }
  ```

  ### 5. Delete a Car

- **Endpoint**: `/api/cars/:carId`
- **Method**: `DELETE`

- **Response: Success message confirming the car has been deleted.**:

  ```json
  {
    "message": "Car deleted successfully",
    "status": true,
    "data": {}
  }
  ```

  ### 6. Order a Car

- **Endpoint**: `/api/orders`
- **Method**: `POST`

- **Request Body:**:

  ```json
  {
    "email": "customer@example.com",
    "car": "648a45e5f0123c45678d9012",
    "quantity": 1,
    "totalPrice": 27000
  }
  ```

  ### 7. Calculate Revenue from Orders (Aggregation)

- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`

- **Response: The total revenue from all orders.**:

  ```json
  {
    "message": "Revenue calculated successfully",
    "status": true,
    "data": {
      "totalRevenue": 810000 // Total revenue calculated from all orders
    }
  }
  ```

## Installation

### Step-1: Run the command below.

```json
npm install
```

### Step-2: Add .env file at the root directory with credential.

```json
DB_URL=mongodb+srv://<user>:<password>@cluster0.3g7cuab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### Step-3: Run the command below for starting the server.

```json
npm run start:dev
```

### Prerequisites

Before setting up the project, ensure the following:

- **Node.js** installed (v16 or later)
- **MongoDB** (local or use MongoDB Atlas for cloud)
