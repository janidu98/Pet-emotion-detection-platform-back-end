const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');


dotenv.config();


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

connectDB();


app.use(express.json());
//Helmet helps secure Express apps by setting HTTP response headers.
app.use(helmet());
//morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process.
app.use(morgan("common"));


app.use('/api/users', userRoute); 
app.use('/api/auth', authRoute); 


app.listen(8800, () => {
    console.log("Back-end server is running!");
})