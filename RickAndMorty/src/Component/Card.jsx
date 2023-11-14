import React,{ useState, useEffect } from "react";
import heartsolid from '../../image/heartsolid.svg';
import heart from '../../image/heart.svg';
import trash from '../../image/trash.svg';
import { delCharAction,addMyFavoriteAction, delFavAction } from "../../redux/cardSlice";
import { useDispatch,useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Card=({id,name,gender,image,species,isFav})=>{
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
            dispatch(delFavAction(user,id))
        }else{
            dispatch(addMyFavoriteAction(user,id))
        }
    }

    return(
        <div className="m-3 card" style={{width: '18rem'}}>
            <div>
                {isFav?(<button onClick={handleFav} className="favButton"><img src={heartsolid}/></button>):(<button onClick={handleFav} className="favButton"><img src={heart}/></button>)}
                {isFav?null:(<button onClick={onClose} className="closeButton"><img src={trash}/></button>)}
            </div>
            <img src={image} alt="Card" className="card-img-top"/>
            <div className="card-body">
                <NavLink to={`/detail/${id}`}><h2 className="card-title">{name}</h2></NavLink>
                <h3 className="card-text">{gender}</h3>
                <h3 className="card-text">{species}</h3>
            </div>
            
        </div>
    )
}

export default Card;