import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";

const SearchBar=(props)=>{
    const [character, setCharacter]=useState("");
    const handleInput=(e)=>{
        const {value}=e.target;
        setCharacter(value);
    }
    
    const handleClick=(e)=>{
        props.onSearch(character);
        setCharacter('');
    }

    return(
        <div className="d-flex" role="search">
            <input type="search" onChange={handleInput} value={character} className="form-control me-2" placeholder='Ingrese número de id'/>
            <button onClick={handleClick} className="btn btn-outline-success" type="submit">Agregar</button>
        </div>
    )
}

export default SearchBar;