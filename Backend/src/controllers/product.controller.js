const { ProductService } = require("../services");

const productsList = async (_req, res) => {
  try {
    const products = await ProductService.productsList();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro interno", error: error.message });
  }
};

module.exports = {
  productsList,
};
