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
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    year: DataTypes.INTEGER,
    kilometers: DataTypes.INTEGER,
    grade: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    photoProduct: DataTypes.STRING,
    delete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};