const products = require("../models/product.models");

function getProducts() {
  return products;
}

function createProduct(name, price) {
  const newId =
    products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 1;
  const product = {
    id: newId,
    name,
    price,
  };
  products.push(product);
  return product;
}

function updateProduct(id, name, price) {
  const product = products.find((data) => data.id === Number(id));
  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }
  product.name = name || product.name;
  product.price = price || product.price;
  return product;
}

function deleteProduct(id) {
  const index = products.findIndex((data) => data.id === Number(id));
  if (index === -1) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }
  products.splice(index, 1);
}

function searchProduct(name) {
  const resultProducts = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
  return resultProducts;
}

function filterProduct(category) {
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  return filteredProducts;
}
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  filterProduct,
};
