const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.ShoppingCart, { foreignKey: "user_id" });
  };

  return User;
};

module.exports = UserModel;
