const express = require('express');
const { connectToMongoDB, closeConnection } = require('./mongoDB');
//const { insertinsertRouter } = require('./insertAPI');
const insertOneRouter = require('./insertOneAPI');
const insertManyRouter = require('./insertManyAPI');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/api/insertOne',insertOneRouter);
app.use('/api/insertMany',insertManyRouter);

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);
    try {
        await connectToMongoDB();
      
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});


process.on('SIGINT', async () => {
    await closeConnection();
    console.log('MongoDB connection closed');
    process.exit();
});