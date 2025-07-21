import express from 'express'
import { getKey, processPayment } from '../controller/productController.js'
const router = express.Router()

// http://localhost:8000/api/v1/payment/process
router.post('/payment/process',processPayment)
// http://localhost:8000/api/v1/getkey
router.get('/getkey',getKey)

export default router