import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Card from "../Component/Card";
import Paginado from "../Component/Paginado";
import Filters from "../Component/Filters";

const Home=()=>{
    const user=useSelector(state=>state.cardsReducer.user);
    const dispatch=useDispatch();
    const characters=useSelector(state=>state.cardsReducer.currentCards);
    const [currentPage,setCurrentPage]=useState(1);
    const [cardsPerPage,setCardsPerPage]=useState(10);
    const favorites=useSelector(state=>state.cardsReducer.favoriteCards);
    const indexCut=currentPage*cardsPerPage;
    const indexFirstCard=indexCut-cardsPerPage;
    const currentCards=characters.slice(indexFirstCard,indexCut);
    
    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    

    return(
        <div>
            <h1 className="text-bg-dark">Bienvenido {user}</h1>
            <div className="container-fluid">
                <Filters setCurrentPage={setCurrentPage} />
                <br />
                <Paginado cardsPerPage={cardsPerPage} allCards={characters.length} paginado={paginado} currentPage={currentPage} />
                <div className="row">
                    {
                        currentCards.map(({id,name,gender,image,species})=>{
                            const isFav=(favorites.filter(fav=>Number(fav)===Number(id)).length)?true:false;
                            return <Card key={id}
                            id={id}
                            name={name}
                            gender={gender}
                            image={image}
                            species={species}
                            isFav={isFav}
                            />
                        })
                    }
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;