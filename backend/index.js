import express from 'express'
import * as dotenv from "dotenv"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT:${PORT}`)
})