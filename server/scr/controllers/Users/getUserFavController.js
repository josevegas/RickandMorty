const {User,Card}=require('../../db.js');

const getUserFavController=async (email)=>{
    const favByEmail=await User.findOne({
        where: {
            email: email,
        },
        attributes: [],
        include: [{
            model: Card,
            through: {
                attributes: [],
            }
        }]
    });
    const userFav=favByEmail.Cards;
    return userFav;
}

module.exports={getUserFavController};