const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect("mongodb+srv://khushigoyal:khushi1111@qccluster.tkp53op.mongodb.net/Ecommerce",{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
    console.log("Mongodb connected with server");
    }).catch((err)=>{ console.log(err); })
};

module.exports = connectDatabase;
