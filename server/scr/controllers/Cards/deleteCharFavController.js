const {User}=require('../../db.js');

const deleteFavController=async (email,id)=>{
    const userByEmail=await User.findOne({
        where: {
            email: email,
        }
    });
    await userByEmail.removeCards(id);
    return 'Favorito removido';
}

module.exports={deleteFavController};