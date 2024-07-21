const express = require('express');
const insertOneRouter = express.Router();
//const bodyParser = require('body-parser');
const {insertOneDocument} = require('./mongoDB');
insertOneRouter.use(express.json());
insertOneRouter.post('/',async(req,res)=>{
    try{
        const {hotelName, hotelImages , destination , pricePerNight , propertyType , guestRating } =req.body;
        const insertData = await insertOneDocument({hotelName, hotelImages , destination , pricePerNight , propertyType , guestRating });
        res.status(200).json({message:'Document Inserted successfully',result:insertData})
    }
    catch(error){
        console.error("Error in inserting the documents",error);
        res.status(500).json({message:'Inserting error '})
    }
})
module.exports=insertOneRouter;