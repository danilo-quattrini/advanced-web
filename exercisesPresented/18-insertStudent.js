const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'DB_students';
const collectionName = 'students';

async function insertOneStudent(){
    try {
     const client = await MongoClient.connect(url);
     const db = client.db(dbName);

     console.log('Connected to MongoDB');

     //Create a collection if it's not exits it will create one
     const collection = db.collection(collectionName);
     console.log("Collection students created", collection);

     const result = await collection.insertOne({
         nome: "Luis Osorio",
         email: "luis@ontop.pt",
     });
     console.log('Document successfully added to MongoDB');
     await client.close();
    }catch (e) {
        console.error("Connection error",e);
    }
}
insertOneStudent();