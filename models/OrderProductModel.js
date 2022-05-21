const sequelize = require('../db/config')
const { DataTypes } = require('sequelize');

const OrderProductModel = sequelize.define('orderProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    quantity: {type: DataTypes.STRING, allowNull: false},
    paidPrice: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = OrderProductModel