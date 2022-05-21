const OrderModel = require("../models/OrderModel");
const OrderProductModel = require("../models/OrderProductModel");
const ProductModel = require("../models/ProductModel");


class OrderService {
  async create(clientEmail, cart, totalPrice) {
      try {
        const order = await OrderModel.create({clientEmail, totalPrice});

        cart.forEach(async (product) => {
            const productFromDb = await ProductModel.findOne({where: {id: product.id}})
            await OrderProductModel.create({quantity: product.quantity, productId: product.id, orderId: order.id, paidPrice: productFromDb.price})
        });
        
        return order

      } catch (e) {
          console.log(e)
      }
    
  };
  async getById(id) {
    try {

      const order = await OrderModel.findOne({
        where:{
          id: id
        },
        include: { all: true, nested: true }
      })

      return order

    } catch (e) {
        console.log(e)
    }
  
};
};

module.exports = new OrderService();