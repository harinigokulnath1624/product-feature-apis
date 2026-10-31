const validateProduct = (req, res, next) => {
  const { name, price, category } = req.body;

  if (!name || price === undefined || price === null || !category) {
    return res.status(400).json({
      message: "Name, price and category are required",
    });
  }

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      message: "Name must be a non-empty string",
    });
  }

  if (typeof price !== "number" || !Number.isFinite(price) || price <= 0) {
    return res.status(400).json({
      message: "Price must be a positive number",
    });
  }

  if (typeof category !== "string" || !category.trim()) {
    return res.status(400).json({
      message: "Category must be a non-empty string",
    });
  }

  next();
};

module.exports = validateProduct;
