const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product-routes");
const app = express();
const cors = require('cors')
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(cors());
app.use("/products", router); // localhost:5000/product

mongoose
  .connect(
    "mongodb+srv://sahil495:test123@cluster0.xzghcab.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("..........Connected to Database......."))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
