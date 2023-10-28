import React,{ useState, useEffect } from "react";
import heartsolid from '../../image/heartsolid.svg';
import heart from '../../image/heart.svg';
import trash from '../../image/trash.svg';
import { delCharAction,addMyFavoriteAction } from "../../redux/cardSlice";
import { useDispatch,useSelector } from "react-redux";

const Card=({id,name,gender,image,species,isFav,favChar})=>{
    const dispatch=useDispatch();
    const user=useSelector(state=>state.cardsReducer.user);
    const thisId=id;
    const onClose=(e)=>{
        e.preventDefault();
        dispatch(delCharAction(thisId));
    };

    const handleFav=(e)=>{
        e.preventDefault();
        if(isFav){
            console.log("se va a eliminar de favoritos")
        }else{
            dispatch(addMyFavoriteAction(user,id))
        }
    }

    console.log(isFav)

    return(
        <div>
            <button onClick={onClose}><img src={trash}/></button>
            <button onClick={handleFav}><img src={heart}/></button>
            <img src={image} alt="Card" />
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <h3>{species}</h3>
        </div>
    )
}

export default Card;