
const prodcutService = require("../services/prodcutService")

class ProdcutController {
    
    async getAll(req, res){
        try {
            const {categoryId} = req.query

            const products = await prodcutService.getProducts(categoryId)

            res.json(products)
            
        } catch (e) {
            console.log(e)
        }
    }

    async getByIds(req, res){
        try {
            const {cartIds} = req.body

            const products = await prodcutService.getProductsByIds(cartIds)

            res.json(products)
            
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ProdcutController()