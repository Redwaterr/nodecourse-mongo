var mongoose = require("mongoose");


var user = mongoose.model("User",{    //MOdel oluşturuyoruz.
    name:{
        type:String,
        required:true,
        minlenght:1,
        trim:true
    },username:{
        type:String,
        minlenght:1,
    },
    completedAt:{
        default:null,
        type:Number
    }
});


module.exports = {user};