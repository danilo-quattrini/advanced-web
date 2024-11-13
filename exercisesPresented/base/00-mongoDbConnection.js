/*We are going to require the module for use mongoDB*/
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/daniq03';

async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(url);
        console.log('Connected to Database');
        client.close();
    }catch (err) {
        console.error("Error to connect to the db",err.message);
    }
}
connectToDatabase();
