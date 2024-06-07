const express = require("express");
const { getAllProducts, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getProductDetails);

module.exports = router;
