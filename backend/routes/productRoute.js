import express from 'express'
import { getKey, paymentVerification, processPayment } from '../controller/productController.js'
const router = express.Router()

// http://localhost:8000/api/v1/payment/process
router.post('/payment/process',processPayment)

// http://localhost:8000/api/v1/getkey
router.get('/getkey',getKey)

// http://localhost:8000/api/v1/paymentverification
router.post('/paymentverification',paymentVerification)

export default router