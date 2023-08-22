const express=require('express');
const {getCharByIdHandler}=require('../handlers/CharacterHandler');
const {postFavoriteHandler,deleteFavoriteHandler}=require('../handlers/FavoriteHandler');
const {loginUserHandler,postUserHandler}=require('../handlers/UserHandler');

const router=express.Router();
router.get('/character/:id',getCharByIdHandler);
router.get('/login',loginUserHandler);
router.post('/fav',postFavoriteHandler);
router.post('/sign',postUserHandler);
router.delete('/fav/:id',deleteFavoriteHandler);

module.exports=router;