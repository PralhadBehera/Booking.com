const express = require('express');
const insertManyRouter = express.Router();
const { insertManyDocument } = require('./mongoDB');
insertManyRouter.use(express.json());

insertManyRouter.post('/', async (req, res) => {
    try {
        const documents = req.body; // Array of objects

        // Validate that documents is an array
        if (!Array.isArray(documents)) {
            return res.status(400).json({ message: 'Request body should be an array of documents' });
        }

        const insertData = await insertManyDocument(documents);
        res.status(200).json({ message: 'Documents Inserted successfully', result: insertData });
    } catch (error) {
        console.error("Error in inserting the documents", error);
        res.status(500).json({ message: 'Inserting error' });
    }
});

module.exports = insertManyRouter;
