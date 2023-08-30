const ShoppingCartModel = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define(
    "ShoppingCart",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      product_id: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      total_price: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      timestamps: false,
      tableName: "shoppingcarts",
      underscored: true,
    }
  );

  ShoppingCart.associate = (models) => {
    ShoppingCart.belongsTo(models.User, { foreignKey: "user_id" });
    ShoppingCart.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return ShoppingCart;
};

module.exports = ShoppingCartModel;
