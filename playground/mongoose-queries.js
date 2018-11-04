const {mongoose} = require("./../server/db/mongoose");
const {user} = require("./../server/models/user");

const {ObjectID} = require("mongodb");

var id = "5bdf6bd117aa84c272615a9b";


user.findById(id).then((user) => {
    if(ObjectID.isValid() || user){
        console.log(JSON.stringify(user,undefined,2));
    }
}).catch((e) => { console.log ("Invalid ID")});

//user.find({
  //  _id:id
//}).then((users) => {
//    console.log("Users",users);
//});

//user.findOne({
//    _id:id
//}).then((user) => {
//    console.log("User",user);
//});
