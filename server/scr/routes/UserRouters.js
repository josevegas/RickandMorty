const {Router}=require('express');
const {postUserHandler}=require('../handlers/User/postUserHandlers.js');
const {getUserHandler}=require('../handlers/User/getUserHandler.js');
const {getUserFavHandler}=require('../handlers/User/getUserFavHandler.js');

const userRouter=Router();
userRouter.post('/',postUserHandler);
userRouter.get('/',getUserHandler);
userRouter.get('/:email',getUserFavHandler);

module.exports={userRouter};