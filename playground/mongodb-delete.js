// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");    //YUKARIDAKİYLE AYNI

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {   //MONGO CONNECTİON
    if(err) {
        return console.log("Connection Failed. !");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp")             //DATA BASE DB YE AKTARILDI.

    //deleteMany
    
    db.collection("Todos").deleteMany({name:"Ugur"}).then((result) => {  //İSMİ UGUR OLAN HEPSİNİ SİLER
        //console.log(result);
    },(err) => {
        console.log("Unable to delete");
    });

    //deleteOne

    db.collection("Users").deleteOne({name:"Ugur"}).then((result) => {  //İSMİ İLK UGUR OLANI SİLER
        //console.log(result);
    });


    //findOneAndDelete

    db.collection("Users").findOneAndDelete({age:25}).then((result) => {
        console.log(result);
    });


    db.collection("Users").findOneAndDelete({    // Yaşı 40 ve adı hüseyin olanı sil.
        age:40,
        name:"Hüseyin"
    });
});