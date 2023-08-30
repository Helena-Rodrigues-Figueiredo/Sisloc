const express = require("express");

const User = require("./controllers/user.controller");
const Product = require("./controllers/product.controller");
const ShoppingCart = require("./controllers/shoppingCart.controller");
const UserValidation = require("./middlewares/validateUser");
const Authentication = require("./middlewares/authentication");

const router = express.Router();

router.post("/", User.login);
router.post("/user", UserValidation, User.register);
router.get("/products", Authentication, Product.productsList);
router.get("/cart/:userId", Authentication, ShoppingCart.getCartItemsByUser);
router.post("/cart/add", Authentication, ShoppingCart.addItemToCart);
router.post("/cart/remove", Authentication, ShoppingCart.removeItemFromCart);
router.delete(
  "/cart/:productId",
  Authentication,
  ShoppingCart.removeAllItemsOfProduct
);

module.exports = router;
