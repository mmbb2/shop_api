const nodemailer = require("nodemailer");
require('dotenv').config();


class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD
            }
          });
    }

  async sendOrderIdMail(to, id) {
      try {

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'You have made a new order',
            text: '',
            html: `
              <div>
                <h2>Order number is:</h2>
                <span>${id}</span>
                <p>Нou can get information about your order on ${process.env.CLIENT_URL}<p/>
              </div>
            `
          })

      } catch (e) {
          console.log(e)
      }
    
  };
};

module.exports = new MailService();