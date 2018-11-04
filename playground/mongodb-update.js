// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");    //YUKARIDAKİYLE AYNI

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {   //MONGO CONNECTİON
    if(err) {
        return console.log("Connection Failed. !");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp")             //DATA BASE DB YE AKTARILDI.

    db.collection("Todos").findOneAndUpdate({       // (FİLTER,OPERATORS,OPTİONS,CALLBACK)   1 TANESİNİ UPDATE EDİYOR.
        name:"Ahmet"
    },{
        $set:{
            name:"Hasan",
            age:35
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });



    db.collection("Users").findOneAndUpdate({       // SET VE İNC OPERATORSLERİ İLE UPDATE İŞLEMİ GERÇEKLEŞTİRİLDİ.
        _id: new ObjectID("5bd8b03f7cae2450f1ee2654")
    },{
        $set: {
            name:"Ugur",
            location:"Iraq",
            tc:252
        },
        $inc: {
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
});