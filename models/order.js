'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
      Order.belongsTo(models.Fleet)
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    FleetId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    from: DataTypes.STRING,
    destination: DataTypes.STRING,
    distance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};