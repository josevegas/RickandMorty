const {User}=require('../../db.js');

const postCharFavController=async (id,email)=>{
    const user=await User.findOne({
        where: {
            email: email,
        }
    });
    await user.addCard(id);
    return 'Favorito agregado';
}

module.exports={postCharFavController};