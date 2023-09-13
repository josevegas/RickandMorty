const {postCharFavController}=require('../../controllers/Cards/postCharFavController.js');

const postCharFavHandler=async (req,res)=>{
    try {
        const {id,email}=req.query;
        if(id&&email){
            const newFav=await postCharFavController(id,email);
            res.status(200).send(newFav);
        }else{
            throw new Error('Falta información')
        }
    } catch (error) {
        res.status(400).send({error: error.message});
    }
}

module.exports={postCharFavHandler};