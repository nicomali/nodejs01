const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@cluster0.0d2sc.mongodb.net/test01?retryWrites=true&w=majority";


class Repository {
    readonly client = new MongoClient(uri, { useNewUrlParser: true });

    constructor() {
        console.log('Object Repository created');
    }

    isValidPassword(usr: String, passwd: String): Boolean {
        console.log('Entering isValidPassword');
        return true;
    }
}