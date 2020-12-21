
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@cluster0.0d2sc.mongodb.net/test01?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


exports.isPermissioned = async function (usr, passwd) {
    let result = false;
    console.log('Connecting to db...');
    let connection = await client.connect();

    if (connection == null) {
        console.log('Error in connecting to db...');
        return null;
    }
    const users = client.db("test01").collection("users");
    if (users == null)
        return null;

    console.log('Finding user in db');
    let user = await users.findOne({ 'user': usr });

    if (user == null) {
        console.log('Error in finding user in db');
        return null;
    }
    console.log('User found in db');

    if (user.password === passwd) {
        console.log('Correct Password');
        result = true;
    } else {
        console.log('Incorrect password');
    }
    console.log('Closing connection...');

    client.close();

    return result;
}