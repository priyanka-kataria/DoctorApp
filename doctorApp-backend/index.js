require('dotenv').config();
const adminRoute =require('./routes/adminRoute.js')
const doctorRoute =require('./routes/doctorRoute.js')
const userRoute=require('./routes/userRoute.js')
var express = require('express');

var cors = require('cors');
var dbConnect = require('./config/Mongodb.js');
const connecttocloudinary=require("./config/cloudinary.js")

const app= express()
const port = process.env.PORT || 4000;

dbConnect();
connecttocloudinary();
app.use(express.json());
app.use(cors({
    origin:"https://doctor-fn0gsdilt-priyanka-katarias-projects.vercel.app/",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    allowedHeaders: ['Content-Type', 'Authorization'],

}));

app.get('/', (req,res)=>{
    res.send('Working fine')
})

app.use('/api/admin',adminRoute)
app.use('/api/doctor',doctorRoute)
app.use('/api/user', userRoute)

app.listen(port, ()=>{
    console.log("Server started", port);

})
