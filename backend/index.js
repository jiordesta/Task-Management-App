import 'express-async-errors'
import express from 'express'
import * as dotenv from "dotenv"
import morgan from 'morgan'

//routers
import authRouter from './routers/authRouter.js'

dotenv.config()
const app = express()

app.use('*', (req, res) => {
    res.status(404).json({message:'Not Found!'})
})

const PORT = process.env.PORT || 8800

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT:${PORT}`)
})