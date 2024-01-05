const Order=require('../models/orderModel')
const { sendWhatsAppMessage } = require('./messageController')

const getAllOrders=async(req,res)=>{
    try {
        let orders=await Order.find({})
        res.json(orders)
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}

const createOrder=async(req,res)=>{
    try {
       let data=req.body;
       let newOrder=await Order.create(data) 
       if(!newOrder){
         res.status(500).json({msg:error.message})
         return;
              }
              
             await sendWhatsAppMessage(newOrder.contact)
       res.json({newOrder,msg:"Order added",number:data.contact})
    } catch (error) {
        res.json({ msg: error.message });
    }
}

module.exports={
    createOrder,getAllOrders
}
