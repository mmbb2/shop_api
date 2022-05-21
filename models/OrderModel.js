const sequelize = require('../db/config')
const { DataTypes } = require('sequelize');

const OrderModel = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    clientEmail: {type: DataTypes.STRING, allowNull: false},
    totalPrice: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = OrderModel