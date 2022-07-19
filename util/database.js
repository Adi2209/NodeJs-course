const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ServerApiVersion } = require('mongodb');


//the underscore is only for telling that this file will only be used internally
let _db;

const mongoConnect = callback => {
    // MongoClient.connect('mongodb+srv://Adi2209:adiisthebest@cluster0.0xzww.mongodb.net/shop?retryWrites=true&w=majority')
    //     .then(client => {
    //         console.log('Connected!');  
    //         _db = client.db();
    //         callback();
    //     })
    //     .catch(err => {
    //         console.log('!');  
    //         console.log(err)
    //         throw err;
    //     });
    const uri = "mongodb+srv://Adi2209:<password>@cluster0.0xzww.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
        console.log('Connected!');
        _db = client.db();
        // callback();
        client.close();
    });

};

const getDb = () => {
    if (_db) {
        return _db;

    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

