const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");


//REST object
const app = express();

//DOTENV
dotenv.config();

//MONGODB CONNECTION
connectDB();

//cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});


//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
// app.get("/", (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     message: "welcome to the full stack app",
//   });
// });

app.use("/api/v1/auth", require("./routes/userRoutes"));
app.use("/api/v1/posts", require("./routes/postRoutes"));
//PORT
const port = process.env.PORT || 8000;

//LISTEN
app.listen(port, () => {
  console.log(`server running on ${port}`.bgGreen.white);
});
