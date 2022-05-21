const categoryService = require("../services/categoryService")

class CategoryController {
    
    async getAll(req, res){
        try {

            const categories = await categoryService.getCategories()

            res.json(categories)
            
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CategoryController()