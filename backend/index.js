import express from 'express'
import dotenv from 'dotenv'
import Razorpay from 'razorpay'
import router from './routes/productRoute.js'

dotenv.config({ path: "config/config.env" })

const app = express()

const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1", router)

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})