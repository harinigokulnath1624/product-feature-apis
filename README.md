# 🛒 Products REST API

A RESTful Products API developed using **Node.js and Express.js** to manage electronic products.

This project implements CRUD operations, product searching, and category-based filtering using a modular **Route → Controller → Service → Model** architecture.

🔗 **GitHub Repository:** https://github.com/harinigokulnath1624/product-feature-apis

## 🚀 Features

- **Get All Products** – Retrieve all available products.
- **Add Product** – Create a new product with an automatically generated ID.
- **Update Product** – Modify existing product details.
- **Delete Product** – Remove a product using its ID.
- **Search Products** – Search products by name using case-insensitive matching.
- **Filter Products** – Filter products based on their category.
- **Input Validation** – Validate product details using custom middleware.
- **Error Handling** – Handle invalid requests and application errors.

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- dotenv
- Postman

## 📁 Project Structure

```text
product-feature-apis/
│
├── config/
│   └── config.js
│
├── controllers/
│   └── productsController.js
│
├── services/
│   └── productsService.js
│
├── models/
│   └── productsModel.js
│
├── routes/
│   └── productsRoutes.js
│
├── middlewares/
│   └── validateProduct.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/harinigokulnath1624/product-feature-apis.git
```

### 2. Navigate to the project

```bash
cd product-feature-apis
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
```

### 5. Start the server

```bash
npm start
```

Or run the server directly:

```bash
node server.js
```

**Base URL:** `http://localhost:3000`

## 📦 Product Data Structure

Each product contains four properties:

| Field    | Type   | Description          |
| -------- | ------ | -------------------- |
| id       | Number | Unique product ID    |
| name     | String | Product name         |
| price    | Number | Product price in INR |
| category | String | Product category     |

Example:

```json
{
  "id": 1,
  "name": "iPhone 15",
  "price": 65000,
  "category": "Mobile"
}
```

**Available Categories:** Mobile, Laptop, Audio, Wearables, Accessories, Monitor, Tablet.

## 🔗 API Endpoints

| Method | Endpoint                               | Description                 |
| ------ | -------------------------------------- | --------------------------- |
| GET    | `/api/products`                        | Get all products            |
| POST   | `/api/products`                        | Add a new product           |
| PUT    | `/api/products/:id`                    | Update an existing product  |
| DELETE | `/api/products/:id`                    | Delete a product            |
| GET    | `/api/products/search?name=apple`      | Search products by name     |
| GET    | `/api/products/filter?category=Laptop` | Filter products by category |

## 🧪 API Usage Examples

### 1. Get All Products

**GET** `/api/products`

Retrieves all available products.

Example response:

```json
[
  {
    "id": 1,
    "name": "iPhone 15",
    "price": 65000,
    "category": "Mobile"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24",
    "price": 75000,
    "category": "Mobile"
  }
]
```

**Status:** `200 OK`

### 2. Add Product

**POST** `/api/products`

Request body:

```json
{
  "name": "Lenovo ThinkPad",
  "price": 65000,
  "category": "Laptop"
}
```

Example response:

```json
{
  "id": 16,
  "name": "Lenovo ThinkPad",
  "price": 65000,
  "category": "Laptop"
}
```

**Status:** `201 Created`

The product ID is generated automatically.

### 3. Update Product

**PUT** `/api/products/1`

Request body:

```json
{
  "name": "iPhone 15 Pro",
  "price": 85000,
  "category": "Mobile"
}
```

Updates the product with ID `1`.

### 4. Delete Product

**DELETE** `/api/products/1`

Deletes the product with ID `1`.

### 5. Search Products by Name

**GET** `/api/products/search?name=apple`

Searches for products whose names contain the specified keyword.

Example response:

```json
[
  {
    "id": 4,
    "name": "Apple MacBook Air",
    "price": 95000,
    "category": "Laptop"
  },
  {
    "id": 10,
    "name": "Apple Watch",
    "price": 35000,
    "category": "Wearables"
  },
  {
    "id": 15,
    "name": "Apple iPad",
    "price": 42000,
    "category": "Tablet"
  }
]
```

**Status:** `200 OK`

Search is implemented using JavaScript's `filter()`, `includes()`, and `toLowerCase()` methods.

### 6. Filter Products by Category

**GET** `/api/products/filter?category=Audio`

Example response:

```json
[
  {
    "id": 7,
    "name": "Sony Headphones",
    "price": 12000,
    "category": "Audio"
  },
  {
    "id": 8,
    "name": "Boat Wireless Earbuds",
    "price": 2500,
    "category": "Audio"
  },
  {
    "id": 9,
    "name": "JBL Bluetooth Speaker",
    "price": 4500,
    "category": "Audio"
  }
]
```

**Status:** `200 OK`

Category filtering uses JavaScript's `filter()` method and case-insensitive string comparison.

## 🛡️ Input Validation

The application uses custom middleware to validate product details.

Validation rules:

- Name must be a non-empty string.
- Price must be a positive number.
- Category must be a non-empty string.
- Required fields must be provided.

Invalid requests return `400 Bad Request` with an appropriate error message.

## 🏗️ Application Architecture

The application follows the **Route → Controller → Service → Model** architecture.

**Routes**

- Define API endpoints and HTTP methods.
- Connect incoming requests to controllers.

**Controllers**

- Handle HTTP requests and responses.
- Read `req.body`, `req.params`, and `req.query`.
- Call the appropriate service functions.

**Services**

- Implement business logic for CRUD operations.
- Perform product searching and category filtering.
- Interact with the products array.

**Models**

- Store product data in an in-memory JavaScript array.

**Middleware**

- Validate incoming product data.
- Prevent invalid requests from being processed.

## 🧠 Concepts Practiced

- REST API development using Express.js
- CRUD operations
- Express Router
- Controller–Service–Model architecture
- Query parameters using `req.query`
- Route parameters using `req.params`
- Request body handling using `req.body`
- Custom validation middleware
- Error handling using `try...catch`
- JavaScript array methods
- Case-insensitive product searching
- Category-based filtering
- Environment variables using dotenv
- API testing using Postman

## ⚠️ Limitations

The application uses an in-memory JavaScript array instead of a database.

- Product data is not permanently stored.
- Changes may be lost when the server restarts.
- The project is intended for practicing backend development fundamentals.

## 🔮 Future Enhancements

- Integrate MongoDB for persistent storage.
- Implement product filtering by price range.
- Add pagination and sorting.
- Implement product authentication and authorization.
- Build a React frontend.

## 📄 Conclusion

This project demonstrates practical backend development skills using Node.js and Express.js through CRUD operations, product searching, category filtering, validation middleware, and modular API architecture.

**GitHub Repository:** https://github.com/harinigokulnath1624/product-feature-apis
