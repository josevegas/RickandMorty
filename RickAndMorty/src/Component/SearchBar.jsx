import React,{useState,useEffect} from "react";

const SearchBar=(props)=>{
    const [character, setCharacter]=useState("");
    const handleInput=(e)=>{
        const {value}=e.target;
        setCharacter(value);
    }
    const handleClick=(e)=>{
        props.onSearch(character);
    }

    return(
        <div>
            <input type="search" onChange={handleInput} />
            <button onClick={handleClick}>Agregar</button>
        </div>
    )
}

export default SearchBar;