const Router = require('express');
const router = new Router();
const orderRourer = require('./orders')
const productRourer = require('./products')
const categoryRourer = require('./categories')

router.use('/order', orderRourer)
router.use('/product', productRourer)
router.use('/category', categoryRourer)

module.exports = router;