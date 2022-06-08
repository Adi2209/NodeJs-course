const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//the underscore is only for teeling that this file will only be used internally
let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://Adi2209:adiisthebest@cluster0.0xzww.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            _db=client.db()
            callback();
        })
        .catch(err => {
            console.log(err)
            throw err;
        });

};

module.exports=mongoConnect;
