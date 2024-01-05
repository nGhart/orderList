const express=require('express')
const { createOrder, getAllOrders } = require('../controller/orderController')
const router=express.Router()

router.post('/create',createOrder)
router.get('/',getAllOrders)

module.exports=router