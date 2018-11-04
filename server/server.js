var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {user} = require("./models/user");

const {ObjectID} = require("mongodb");

var app = express();

app.use(bodyParser.json());

app.post("/users",(req,res) => {
     var newUser = new user({
         name:req.body.name
     });

     newUser.save().then((doc) => {
        res.send(doc);
     },(e) => {
         res.status(400).send(e);
     });
});


app.get("/users",(req,res) => {
    user.find().then((users) => {
        res.send({users});
    },(e) => {
        res.status(400).send(e);
    });
});

app.get("/users/:id",(req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.send("Invalid ıd");
    }
    user.findById(id).then((user)=>{
        if(!user){
            return res.send("User ID not found");
        }
        res.send(JSON.stringify(user.name,undefined,2));
    },(err) => {
        if(err){
            res.send("404");
        }
    });
});

app.listen(3000,() => {
    console.log("Started on port 3000!");
});


module.exports = {app};