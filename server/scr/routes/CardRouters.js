const {Router}=require('express');
const multer=require('multer');
const {getCharByIdHandler}=require('../handlers/Card/getCharByIdHandler.js');
const {postCharFavHandler}=require('../handlers/Card/postCharFavHandler.js');
const {deleteCharFavHandler}=require('../handlers/Card/deleteCharFavHandler.js');

const cardRouter=Router();
const storage=multer.memoryStorage();

cardRouter.get('/:id',getCharByIdHandler);
cardRouter.post('/',postCharFavHandler);
cardRouter.delete('/:email/:id',deleteCharFavHandler);

module.exports={cardRouter};