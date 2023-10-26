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
        <div>
            <input type="search" onChange={handleInput} value={character}/>
            <button onClick={handleClick}>Agregar</button>
        </div>
    )
}

export default SearchBar;