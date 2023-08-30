const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      item: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      technical_information: DataTypes.STRING,
      weekly_price: DataTypes.FLOAT,
      daily_price: DataTypes.FLOAT,
      monthly_price: DataTypes.FLOAT,
      fortnightly_price: DataTypes.FLOAT,
    },
    {
      tableName: "products",
      timestamps: false,
      underscored: true,
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.ShoppingCart, { foreignKey: "product_id" });
  };

  return Product;
};

module.exports = ProductModel;
