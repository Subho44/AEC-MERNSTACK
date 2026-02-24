const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/Payment");


const razorpay = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
});

//create order

exports.createOrder = async(req,res) => {
    try {
        const {amount,jobId} = req.body;
        const options = {
            amount:Number(amount),
            currency:"INR",
            receipt: `job_payment_${jobId}_${Date.now()}`,
        };
        const order = await razorpay.orders.create(options);
        return res.status(200).json({
            key:process.env.RAZORPAY_KEY_ID,
            order,
        });
    } catch(err) {
         return res.status(500).json(err);
    }
};
//verify payment feature
