const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./database/connect')
const Register = require('./routes/User')
const Product = require('./routes/Product')
const cors = require('cors')




app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

app.use('/api/v1', Register);
app.use('/api/v1/product', Product);

const start = async () => {

    try {

        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => console.log(`server is running on Port ${process.env.PORT}....`))
        
    } catch (error) {
        console.log(error)
    }
}

start()

