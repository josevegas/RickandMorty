import React,{ useState, useEffect } from "react";
import heartsolid from '../../image/heartsolid.svg';
import heart from '../../image/heart.svg';
import trash from '../../image/trash.svg'

const Card=({id,name,gender,image,species})=>{
    return(
        <div>
            <button onClick={onclose}><img src={trash}/></button>
            <img src={image} alt="Card" />
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <h3>{species}</h3>
        </div>
    )
}

export default Card;