const express = require('express');
const router = express.Router();
const { sendWhatsAppMessage } = require('../controller/messageController');

// router.get('/sendMessage', (req,res)=>res.send('HELLO'));
router.post('/sendMessage', sendWhatsAppMessage);

module.exports = router;