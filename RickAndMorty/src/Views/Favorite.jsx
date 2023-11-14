import React, { useState } from "react";
import axios from "axios";
import Card from "../Component/Card";
import { useSelector } from "react-redux";
import Paginado from "../Component/Paginado";

const Favorite=()=>{
    const allChards=useSelector(state=>state.cardsReducer.allCards)
    const fav=useSelector(state=>state.cardsReducer.favoriteCards)
    let favChars=[]
    const [currentPage,setCurrentPage]=useState(1);
    const [cardsPerPage,setCardsPerPage]=useState(10);
    fav.map(f=>{
        const char=allChards.filter(ch=>ch.id===f)[0]
        favChars=([...favChars,char]);
    })
    const indexCut=currentPage*cardsPerPage;
    const indexFirstCard=indexCut-cardsPerPage;
    const currentCards=favChars.slice(indexFirstCard,indexCut);
    console.log(currentCards)
    const backHome=()=>{
        Navigate("/home")
    }

    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return(
        <div>
            <h1 className="text-bg-dark">Favoritos</h1>
            <div className="row">
                <Paginado cardsPerPage={cardsPerPage} allCards={favChars.length} paginado={paginado} currentPage={currentPage} />
                {
                    currentCards.map(({id,name,gender,image,species})=>{
                        return <Card 
                            key={id}
                            id={id}
                            name={name}
                            gender={gender}
                            image={image}
                            species={species}
                            isFav={true}
                        />
                    })
                }
            </div>
            <button onClick={backHome} className="btn btn-primary">Volver a Home</button>
        </div>
    )
}

export default Favorite;