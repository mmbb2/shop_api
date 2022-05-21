const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");


class ProdcutService {
  async getProducts(categoryId) {
      try {

        let products
        
        if(categoryId){
          products = await ProductModel.findAll({where: {categoryId},
            include: [{
              model: CategoryModel,
              as: 'category',
              required: true,
            }]})
        } else{
          products = await ProductModel.findAll({
            include: [{
              model: CategoryModel,
              as: 'category',
              required: true,
            }]
          })
        }

        return products

      } catch (e) {
          console.log(e)
      }
    
  };

  async getProductsByIds(Ids){

    try {

      const products = await ProductModel.findAll({
        where: {
          id: Ids
        },
        include: [{
          model: CategoryModel,
          as: 'category',
          required: true,
        }]})
        
      return products

      
    } catch (e) {
      console.log(e)
    }

  }
};

module.exports = new ProdcutService();