const express = require('express');
const app = express();
const mongoose = require('mongoose');
const roomsRoute = require('./routes/roomRoute')
const userRoute = require('./routes/userRoute')
const bookingRoute = require('./routes/bookingsRoute')
require('dotenv').config()

const cors = require('cors')

app.use(express.json());
app.use(cors());

const mongoURL = 'mongodb+srv://asim:asim@cluster0.m9eim.mongodb.net/mern-rooms';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewURLParser: true})

app.use('/api/rooms',roomsRoute)
app.use('/api/users',userRoute)
app.use('/api/bookings',bookingRoute)

const port = 5000 || process.env.Port;
app.listen(port, ()=>console.log('nodemon started node'))
