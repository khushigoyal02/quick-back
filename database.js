const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
    console.log("Mongodb connected with server");
    }).catch((err)=>{ console.log(err); })
};

module.exports = connectDatabase;