var mongoose = require("mongoose");


var user = mongoose.model("User",{    //MOdel oluşturuyoruz.
    name:{
        type:String,
        required:true,
        minlenght:1,
        trim:true
    },surname:{
        type:String,
        minlenght:1,
    },
    age:{
        type:Number
    },
    completed:{
        default:false,
        type:Boolean
    },
    completedAt:{
        default:null,
        type:Number
    }
});


module.exports = {user};