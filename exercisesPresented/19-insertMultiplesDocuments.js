const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'DB_students';
const collectionName = 'students';

async function insertManyStudents(){
    try{
        //We instance the connection with the url we created before
        const connection = await mongoClient.connect(url);
        //We are going to connect into our db selecting the specifc db
        const db = connection.db(dbName);
        var myStudents = [
            {name: 'Elon Musk', email: 'student1@example.com'},
            {name: 'Bill Gates', email: 'student2@example.com'},
            {name: 'Jeff Besoz', email: 'student3@example.com'}
        ]

        await db.collection(collectionName).insertMany(myStudents, (err, res) =>{});
        await connection.close();
    }catch (err){
        console.error('Error occurred while inserting mongoDB',err);
    }
    console.log('Students inserted successfully');
}
insertManyStudents();