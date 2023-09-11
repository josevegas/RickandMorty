const axios=require('axios');
const URL="https://rickandmortyapi.com/api/character/";
const {Card}=require('../../db.js');

const getCharByIdController=async(id)=>{
    let charInfo={};
    const charById=await Card.findAll({
        where: {
            id: id,
        }
    });
    if(charById.length){
        charInfo=charById[0]
    }else{
        const charURL=await axios.get(URL+id);
        const {name,status,species,gender,origin,image}=await charURL.data;
        const newChar= await Card.create({id,name,status,species,gender,origin:origin.name,image});
        charInfo=newChar;
    }
    return charInfo;
}

module.exports={getCharByIdController};