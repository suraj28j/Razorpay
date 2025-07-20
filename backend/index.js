import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config({path:"config/config.env"})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})