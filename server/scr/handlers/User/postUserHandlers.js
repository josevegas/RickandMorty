const {postUserController}=require('../../controllers/Users/postUserController.js');
const {getUserController}=require('../../controllers/Users/getUserController.js');
const {getUserFavController}=require('../../controllers/Users/getUserFavController.js');

const postUserHandler=async (req,res)=>{
    const {email,password}=req.query;
    try {
        const newUser=await postUserController(email,password);
            if(newUser){
                res.status(200).send(newUser.data);
            }
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

const getUserHandler=async (req,res)=>{
    const {email,password}=req.query;
    try {
        if(email&&password){
            const login=await getUserController(email,password);
            if(login){
                res.status(200).send(login);
            }else{
                throw new Error("la contraseña es erronea")
            }
        }
    } catch (error) {
        res.status(400).send({error: error.message});
    }
}



module.exports={postUserHandler,getUserHandler};