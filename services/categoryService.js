const CategoryModel = require("../models/CategoryModel")

class CategoryService {
  async getCategories() {
      try {

        const categories = await CategoryModel.findAll()

        return categories

      } catch (e) {
          console.log(e)
      }
    
  };
};

module.exports = new CategoryService();