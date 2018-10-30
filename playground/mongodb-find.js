// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");    //YUKARIDAKİYLE AYNI

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {   //MONGO CONNECTİON
    if(err) {
        return console.log("Connection Failed. !");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp")             //DATA BASE DB YE AKTARILDI.

    db.collection("Todos").find({location:["Tekirdag","Urfa"]}).toArray().then((docs) => {   // LOCATİONU TEKİRDAG,URFA OLAN TodoAPp db sinde TODOS tablosundaki.
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log("Unable to fetch todos",err);
    });

    db.collection("Todos").find().count().then((count) => {   // LOCATİONU TEKİRDAG,URFA OLAN TodoAPp db sinde TODOS tablosundaki.
        console.log("Todos count:",count);
    },(err) => {
        console.log("Unable to fetch todos",err);
    });

    // ID Sİ 123 OLAN KAYITI ÇEKMEK

    db.collection("Users").find({_id:123}).toArray().then((docs) => {
        console.log("User ID:123\n");
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log("Unable to fetch error");
    });
    //db.close();
});