const sequelize = require('../db/config')
const { DataTypes } = require('sequelize');

const CategoryModel = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = CategoryModel