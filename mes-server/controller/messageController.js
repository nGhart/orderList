const axios = require('axios');
const dotenv=require('dotenv')
dotenv.config()

function sendWhatsAppMessage (recipient) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": recipient,
    "type": "template",
    "template": {
      //"name": "hello_world",
      "name": "order_received",
      "language": {
        "code": "en_US"
      }
    }
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
   url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
   
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    },
    data: data
  };

return axios.request(config)
    .then(response => {
      console.log("message delivered")
    })
    .catch((error) => {
      console.log("test",error)
    });
}

module.exports = {
  sendWhatsAppMessage,
};
