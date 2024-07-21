
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToMongoDB() {
    try {
      
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function insertOneDocument(document){
    try{
       const database = client.db();
       const collection = database.collection('Hotel');
       const insertOneData = await collection.insertOne(document);
       return insertOneData;
    }catch(error){
        console.log("Error in inserting the Document",error);
        throw error;
    }
}

async function insertManyDocument(document){
try{
 const database = client.db();
 const collection = database.collection('Hotel');
 const insertManyData = await collection.insertMany(document);
 return insertManyData;
}catch(error){
    console.error("Error in inserting Multiple Record",error);
    throw error;
}
}

module.exports = {
    connectToMongoDB,
    insertOneDocument,
    insertManyDocument,
    closeConnection: () => client.close()
};