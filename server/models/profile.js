'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {foreignKey:"userId"})
    }
  }
  Profile.init({
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    mobilePhone: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};