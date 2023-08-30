const { ShoppingCart, Product } = require("../models");

const getCartItemsByUser = async (userId) => {
  const cartItems = await ShoppingCart.findAll({
    where: { user_id: userId },
    include: [
      {
        model: Product,
        attributes: ["item", "description", "price", "image"],
      },
    ],
  });
  return cartItems;
};

const addItemToCart = async (userId, productId) => {
  const product = await Product.findByPk(productId);
  let cartItem = await ShoppingCart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (cartItem) {
    cartItem.quantity += 1;
    cartItem.total_price = cartItem.quantity * product.price;
    await cartItem.save();
  } else {
    cartItem = await ShoppingCart.create({
      user_id: userId,
      product_id: productId,
      quantity: 1,
      total_price: product.price,
    });
  }

  return cartItem;
};

const removeItemFromCart = async (userId, productId) => {
  const product = await Product.findByPk(productId);
  let cartItem = await ShoppingCart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    cartItem.total_price = cartItem.quantity * product.price;
    await cartItem.save();
  } else {
    await cartItem.destroy();
  }

  return cartItem;
};

const removeAllItemsOfProduct = async (userId, productId) => {
  let cartItem = await ShoppingCart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  await cartItem.destroy();
  return cartItem;
};

module.exports = {
  addItemToCart,
  removeItemFromCart,
  getCartItemsByUser,
  removeAllItemsOfProduct,
};
