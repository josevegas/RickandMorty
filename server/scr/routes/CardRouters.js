const {Router}=require('express');
const multer=require('multer');
const {getCharByIdHandler,postCharFavHandler}=require('../handlers/CardHandlers.js');

const cardRouter=Router();
const storage=multer.memoryStorage();

cardRouter.get('/:id',getCharByIdHandler);
cardRouter.post('/',postCharFavHandler);

module.exports={cardRouter};