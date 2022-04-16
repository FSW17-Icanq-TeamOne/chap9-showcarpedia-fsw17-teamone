'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       //Product.belongsTo(models.User)
      Product.belongsToMany(models.User, { through: models.Wishlist, foreignKey: "productId"})
    }
  }
  Product.init({
    title: DataTypes.STRING,
    brand: DataTypes.STRING,
    year: DataTypes.STRING,
    kiloMeter: DataTypes.STRING,
    grade: DataTypes.ENUM('5', '4', '3', '2', '1'),
    category: DataTypes.STRING,
    photoProducts: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.STRING,
    delete: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
