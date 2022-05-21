const CategoryModel = require('../models/CategoryModel')
const ProductModel = require('../models/ProductModel')
const OrderModel = require('../models/OrderModel')
const OrderProductModel = require('../models/OrderProductModel')

CategoryModel.hasMany(ProductModel, {as: 'products'})
ProductModel.belongsTo(CategoryModel, {as: 'category'})

ProductModel.hasMany(OrderProductModel, {as: 'orderProducts'})
OrderProductModel.belongsTo(ProductModel, {as: 'product'})

OrderModel.hasMany(OrderProductModel, {as: 'orderProducts'})
OrderProductModel.belongsTo(OrderModel, {as: 'order'})


