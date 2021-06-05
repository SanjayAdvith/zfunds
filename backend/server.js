import express from 'express'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import userRoutes from './routes/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


dotenv.config()
const app = express()
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


// error handaling on postman
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('API is running'))