const express = require("express");
const Stripe =require("stripe");
const cors = require("cors");

const stripe =new Stripe("sk_test_51JgAE1HJlvWQZSPTe3gMVedPIhaBiu41nodnpm1gkRjJ3YXH3EAdeWFd1f0ey31eRGDYEQCYAYCqIvRGp86bQhmQ006fZIEVHk")

const app = express();

//middleware

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json())

app.post("/api/checkout", async(req,res)=>{
    console.log(req.body);
    const {id, amount} = req.body;

    try{
        const payment=await stripe.paymentIntents.create({
            amount,
            currency: "Sol",
            description: "Basket of Products",
            payment_method: id,
            confirm:true,
        });
        console.log(payment);

        return res.status(200).json({message:"Correctamente Pagado"});
    } catch(error){
        return res.json({message: error.raw.message})  
      }
});


app.listen(3001, () => {
    console.log("Server on port", 3001);
});