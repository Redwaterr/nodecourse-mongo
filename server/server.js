var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {user} = require("./models/user");

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

app.listen(3000,() => {
    console.log("Started on port 3000!");
});


module.exports = {app};