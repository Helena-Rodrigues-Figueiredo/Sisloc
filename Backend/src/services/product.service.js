const { Product } = require("../models");

const productsList = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = {
  productsList,
};
