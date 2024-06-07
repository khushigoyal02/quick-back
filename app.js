const express = require("express");
const app = express();

app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const cart=require("./routes/cartRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", cart);

module.exports=app;