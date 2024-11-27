const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'test';
const collectionName = 'test';

async function createMongoDB() {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');

    try {
        /*We are specifing the database where we are going to work on */
        const db = client.db(dbName);
        console.log(`Connected to the MongoDB: ${dbName}`);

        const collection = db.collection(collectionName);
        console.log(`Created collection: ${collection}`);

        const result =  await collection.insertOne({
            title: collectionName,
            body: "This is my first collection created in NodeJS",
            likes: 1,
            category: "NodeJS",
            date: new Date()
        });
        console.log(`Document created with the id: ${result}`);
    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}

createMongoDB();