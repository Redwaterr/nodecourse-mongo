const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

var authSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        trim:true,
        minglenght:1,
        unique:true,
        validate:{
             validator:validator.isEmail,
             message:"{VALUE} is not a valid email"
        }
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    tokens:[{
        access:{
         type:String,
         required:true
        },
        token:{
         type:String,
         required:true
        }
    }]
 });     

authSchema.methods.toJSON = function () {
    var auth = this;
    var authObject = auth.toObject();

    return _.pick(authObject,["_id","email"]);
};

 authSchema.methods.generateAuthToken = function() {
    var auth = this;
    var access = "auth";
    var token = jwt.sign({_id:auth._id.toHexString(),access},"abc123").toString();
    
    auth.tokens = auth.tokens.concat([{access,token}]);

    return auth.save().then(() => {
        return token;
    });
};

 var auth = mongoose.model("auths",authSchema);
   


module.exports = {auth};