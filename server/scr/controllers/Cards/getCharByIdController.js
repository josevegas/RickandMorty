const axios=require('axios');
const URL="https://rickandmortyapi.com/api/character/";

const getCharByIdController=async(id)=>{
    const charURL=await axios.get(URL+id);
    const {name,status,species,gender,origin,image}=await charURL.data;
    const charInfo={id,name,status,species,gender,origin,image}
    return charInfo;
}

module.exports={getCharByIdController};