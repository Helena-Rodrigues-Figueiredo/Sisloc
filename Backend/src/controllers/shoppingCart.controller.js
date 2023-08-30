const { ShoppingCartService } = require('../services');

const getCartItemsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await ShoppingCartService.getCartItemsByUser(userId);
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    const cartItem = await ShoppingCartService.addItemToCart(userId, productId);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const removeItemFromCart = async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    const result = await ShoppingCartService.removeItemFromCart(userId, productId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeAllItemsOfProduct = async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.params;

  try {
    const result = await ShoppingCartService.removeAllItemsOfProduct(userId, productId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addItemToCart,
  removeItemFromCart,
  getCartItemsByUser,
  removeAllItemsOfProduct
};
