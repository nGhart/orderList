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


// function sendWhatsAppMessage (req, res) {
//   const data = JSON.stringify({
//     "messaging_product": "whatsapp",
//     "to": process.env.RECIPIENT_WAID,
//     "type": "template",
//     "template": {
//       //"name": "hello_world",
//       "name": "order_received",
//       "language": {
//         "code": "en_US"
//       }
//     }
//   });

//   const config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
//     },
//     data: data
//   };

// axios.request(config)
//     .then(response => {
//       console.log("Message delivered")
//            //res.status(response.status).json(response.data);
//     })
//     .catch(error => {
//       // console.error('Error sending WhatsApp message:', error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// }

module.exports = {
  sendWhatsAppMessage,
};
