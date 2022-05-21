const mailService = require("../services/mailService")
const orderService = require("../services/orderService")


class OrderController {
    
    async createOrder(req, res){
        try {
            const {clientEmail, cart, totalPrice} = req.body

            const order = await orderService.create(clientEmail, cart, totalPrice)

            await mailService.sendOrderIdMail(clientEmail, order.id)

            res.json(order)
            
        } catch (e) {
            console.log(e)
        }
    }

    async getOrder(req, res){
        try {
            const {orderId} = req.query
            
            console.log(orderId)

            const order = await orderService.getById(orderId)


            res.json(order)
            
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new OrderController() 