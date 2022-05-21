const Router = require('express');
const orderController = require('../controllers/orderController');
const router = new Router();

router.post('/create', orderController.createOrder)
router.get('/', orderController.getOrder)

module.exports = router;