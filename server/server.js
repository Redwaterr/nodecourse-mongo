const _ = require("lodash");

var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {user} = require("./models/user");

const {ObjectID} = require("mongodb");

var app = express();
const port = process.env.PORT || 3000;   //Herokuda çalışması için.


app.use(bodyParser.json());

app.post("/users",(req,res) => {     //YENİ ÜYE EKLİYORUZ.
     var newUser = new user({
         name:req.body.name,
         age:req.body.age,
         surname:req.body.surname
     });

     newUser.save().then((doc) => {
        res.send(doc);
     },(e) => {
         res.status(400).send(e);
     });
});


app.get("/users",(req,res) => {   // /USERS YAZINCA USERSLARI LİSTELEMESİ İÇİN
    user.find().then((users) => {
        res.send({users});
    },(e) => {
        res.status(400).send(e);
    });
});

app.get("/users/:id",(req,res) => {   // GET İLE URL YANINA ID YAZINCA ONU BULUP RESLEMESİ İÇİN.
    var id = req.params.id; //gelen parametreyi yakalıyor.
    if(!ObjectID.isValid(id)){
        return res.send("Invalid id");
    }
    user.findById(id).then((user)=>{
        if(!user){
            return res.send("User ID not found");
        }
        res.send(JSON.stringify(user,undefined,2));
    },(err) => {
        if(err){
            res.send("404");
        }
    });
});




app.delete("/users/:id",(req,res) => {   // İD Yİ BULUP SİLMESİ İÇİN.
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.send("Invalid id.");
    }
    user.findByIdAndRemove(id).then((user) => {
        if(!user) {
            return res.send("USER ID NOT FOUND");
        }
        res.send(JSON.stringify(user,undefined,2));
    },(err) => {
        if(err) {
            res.send("404");
        }
    });
});

app.patch("/users/:id",(req,res) => {   // İD Yİ BULUP UPDATE ETMESİ İÇİN.
    var id = req.params.id;
    var body = _.pick(req.body,["age","name","surname","completed"]);

    if(!ObjectID.isValid(id)){
        return res.send("Invalid id.");
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else {
        body.completed = false;
        body.completedAt = null;
    }

    user.findByIdAndUpdate(id,{$set : body},{new:true}).then((user) => {
        if(!user){
            return res.send("404");
        }
        res.send({user});

    }).catch((e) => {
        res.send("404");
    });

});


app.listen(port,() => {
    console.log("Started on port ",port);
});

module.exports = {app};