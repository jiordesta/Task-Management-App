import 'express-async-errors'
import express from 'express'
import * as dotenv from "dotenv"
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

//middlewares
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js'

//routers
import authRouter from './routers/authRouter.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

//routers
app.use('/tma/auth',authRouter)

//middlewares
app.use(errorHandlerMiddleware)

app.use('*', (req, res) => {
    res.status(404).json({message:'Not Found!'})
})
const PORT = process.env.PORT || 8800
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}
try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT:${PORT}`)
    })
} catch (error) {
    process.exit(1)
}

