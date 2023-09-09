const {Router}=require('express');
const {postUserHandler,getUserHandler}=require('../handlers/UserHandlers.js');

const userRouter=Router();
userRouter.post('/',postUserHandler);
userRouter.get('/',getUserHandler);

module.exports={userRouter};