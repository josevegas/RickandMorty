const {getCharByIdController}=require('../controllers/getCharByIdController');

const getCharByIdHandler= async (req,res)=>{
    const {id}=req.params;
    try {
        if(id){
            const charById= await getCharByIdController(id);
            res.status(200).send(charById);
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}