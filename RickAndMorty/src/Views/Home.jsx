import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Card from "../Component/Card";
import { addMyFavoriteAction } from "../../redux/cardSlice";

const Home=()=>{
    const user=useSelector(state=>state.cardsReducer.user);
    const dispatch=useDispatch();
    const characters=useSelector(state=>state.cardsReducer.allCards);
    const favorites=useSelector(state=>state.cardsReducer.favoriteCards);
    
    const favChar=(id,isFav)=>{
        if(isFav){
            dispatch(addMyFavoriteAction(user,id));
        }
    }

    return(
        <div>
            <h1>Bienvenido {user}</h1>
            {
                characters.map(({id,name,gender,image,species})=>{
                    const isFav=(favorites.filter(fav=>Number(fav)===Number(id)).length)?true:false;
                    return <Card key={id}
                    id={id}
                    name={name}
                    gender={gender}
                    image={image}
                    species={species}
                    isFav={isFav}
                    favChar={favChar(id,isFav)}
                    />
                })
            }
        </div>
    )
}

export default Home;