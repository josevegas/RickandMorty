const {User}=require('../../db');

const getUserController=async (email,password)=>{
    const userByEmail=await User.findAll({
        where: {
            email: email,
        }
    });
    // console.log(userByEmail[0].password)
    if(userByEmail[0].password===password){
        return true;
    }else{
        return false;
    }
};

module.exports={getUserController};