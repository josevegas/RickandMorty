import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Card from "../Component/Card";

const Home=()=>{
    const user=useSelector(state=>state.cardsReducer.user)
    const characters=useSelector(state=>state.cardsReducer.allCards)
    // const onClose=(id)=>{
    //     const filtered=character.filter((char)=>Number(char.id)!==Number(id));
    //     setCharacter(filtered);
    // }

    return(
        <div>
            <h1>Bienvenido {user}</h1>
            {
                characters.map(({id,name,gender,image,species})=>{
                    return <Card key={id}
                    id={id}
                    name={name}
                    gender={gender}
                    image={image}
                    species={species}
                    //onClose={onClose(id)}
                    />
                })
            }
        </div>
    )
}

export default Home;