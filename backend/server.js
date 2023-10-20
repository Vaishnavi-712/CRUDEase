const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const cors=require("cors");
const userroutes=require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));



app.use(userroutes);