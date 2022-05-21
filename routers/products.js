const Router = require('express');
const productController = require('../controllers/productController');
const router = new Router();

router.get('/:categoryId', productController.getAll)
router.post('/getByIds', productController.getByIds)
router.get('/', productController.getAll)

module.exports = router;