import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail=({characters})=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const char=characters.filter(character=>Number(character.id)===Number(id))[0]
    const backhome=()=>{navigate('/home')}

    return(
        <div>
            <div className="text-bg-dark" style={{width: 'fit-content'}}>
                <h1>Nombre: {char?.name}</h1>
                <h3>Status: {char?.status}</h3>
                <h3>Especie: {char?.species}</h3>
                <h3>Género: {char?.gender}</h3>
                <h3>Origen: {char?.origin}</h3>
                <img src={char?.image} alt={char?.name} className="imageDetail"/>
            </div>
            <br />
            <button onClick={backhome} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default Detail;