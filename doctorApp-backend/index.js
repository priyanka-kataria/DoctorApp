require("dotenv").config();
const adminRoute = require("./routes/adminRoute.js");
const doctorRoute = require("./routes/doctorRoute.js");
const userRoute = require("./routes/userRoute.js");
var express = require("express");

var cors = require("cors");
const allowedOrigins = [
  "https://doctor-app-rh82.vercel.app", // Add your frontend origin
  "https://doctor-app-rh82.vercel.app/", // Add any other allowed origins
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true"); // Include credentials if needed
  }
  next();
});

// Handle preflight OPTIONS requests
app.options("*", (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  res.sendStatus(200);
});

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
