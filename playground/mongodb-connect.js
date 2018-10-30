// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");    //YUKARIDAKİYLE AYNI

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {   //MONGO CONNECTİON
    if(err) {
        return console.log("Connection Failed. !");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp")             //DATA BASE DB YE AKTARILDI.

    db.collection("Todos").insertOne({           //INSERT ONE İLE 1 TANE DEĞER KAYDETTİK VE CALL BACK FONKSİYONU ÇAĞIRDIK.
        name:"Ugur",
        age:20,
        location:{address:"Toros evleri C blok",city:"Tekirdag"},
        completed:false
    },(err,result) => {
        if(err) {
            return console.log("Unable to insert todo",err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection("Users").insertOne({
        name:"Ugur",
        surname:"OZDEMIR",
        age:25,
        location:"Tekirdag"
    },(err,result) => {
        if(err) {
            return console.log("Unable to insert Users",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());

    });

    client.close();
});