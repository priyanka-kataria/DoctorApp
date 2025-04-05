require("dotenv").config();
const adminRoute = require("./routes/adminRoute.js");
const doctorRoute = require("./routes/doctorRoute.js");
const userRoute = require("./routes/userRoute.js");
var express = require("express");

var cors = require("cors");
const allowedOrigins = [
    'https://doctor-app-rh82.vercel.app',
    'https://doctor-app-rh82.vercel.app',
  ];
  
  // Configure CORS middleware
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }));
  
  // Handle preflight requests
  app.options('*', cors());

var dbConnect = require("./config/Mongodb.js");
const connecttocloudinary = require("./config/cloudinary.js");

const app = express();

const port = process.env.PORT || 4000;

dbConnect();
connecttocloudinary();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working fine");
});

app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log("Server started", port);
});
