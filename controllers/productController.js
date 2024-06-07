const Product = require("../models/productModel");
const catchAsyncErrors = require("../catchAsyncErrors");

// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products=await Product.find({});
  res.json(products);
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});