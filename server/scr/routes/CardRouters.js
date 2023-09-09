const {Router}=require('express');
const multer=require('multer');
const {getCharByIdHandler}=require('../handlers/CardHandlers.js');

const cardRouter=Router();
const storage=multer.memoryStorage();

cardRouter.get('/:id',getCharByIdHandler);

module.exports={cardRouter};