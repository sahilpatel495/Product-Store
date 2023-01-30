const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const productController = require("../controllers/product-controller");

router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.get("/:id", productController.getById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
