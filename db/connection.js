const sequelize = require('./config')
require('./assotiations');

const connect = async () => {
     try {

         await sequelize.authenticate()
         await sequelize.sync()

     } catch (e) {
         console.log(e)
     }
} 

module.exports = connect;