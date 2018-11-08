var {mongoose} = require("./../server/db/mongoose");
var {user} = require("./../server/models/user");

const {ObjectID} = require("mongodb");

user.remove({}).then((result) => {
    console.log(result);
});

//user.findOneAndRemove
//user.findByIdAndRemove

user.findOneAndRemove({_id:"5be46b909617ba3788e4ac20"}).then((user) => {
    console.log(user);
});

user.findByIdAndRemove("5be46b909617ba3788e4ac20").then((user) => {
    console.log(user);
});