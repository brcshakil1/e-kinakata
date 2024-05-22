# E-Kinakata Express Server

Welcome to the E-Kinakata Express server! This server provides endpoints to manage products and orders for an e-commerce platform.

## Prerequisites

Before running the server locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) database
- `.env` file with the following environment variables:

`PORT=3000
DATABASE_URL=your_mongodb_connection_string`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brcshakil1/e-kinakata.git
```

2. Navigate to the project directory:

   ```sh
   cd your-repo-name
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a .env file in the root directory and add your environment variables as mentioned above.

### Running the Application

1. To run the server locally, execute the following command:

   ```sh
   npm run start:dev
   ```

# Endpoints

## Products

1. Create a New Product

- Endpoint: /api/products

- Method: POST

- Sample Request Body:

```json
{
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
```

2. Retrieve a List of All Products

- Endpoint: /api/products
- Method: GET
- Retrieve a Specific Product by ID

3. Endpoint: /api/products/:productId

- Method: GET
- Update Product Information

4. Endpoint: /api/products/:productId

- Method: PUT
- Sample Request Body: Same as for creating a new product

5. Delete a Product

- Endpoint: /api/products/:productId
- Method: DELETE

6. Search a Product

- Endpoint: /api/products?searchTerm=iphone
- Method: GET

## Orders

1. Create a New Order

- Endpoint: /api/orders
- Method: POST
- Request Body:

```json
{
  "email": "level2@programming-hero.com",
  "productId": "5fd67e890b60c903cd8544a3",
  "price": 999,
  "quantity": 1
}
```

2. Retrieve All Orders

- Endpoint: /api/orders
- Method: GET

2. Retrieve Orders by User Email

- Endpoint: /api/orders?email=level2@programming-hero.com
- Method: GET

# Testing

You can test the application using tools like Postman or by making HTTP requests from your browser or terminal. Ensure the server is running locally before testing.
