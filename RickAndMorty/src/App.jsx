import React,{ useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import Home from './Views/Home.jsx';
import NavBar from './Views/NavBar.jsx';
import About from "./Views/About.jsx";
import Detail from "./Views/Detail.jsx";
import Favorite from "./Views/Favorite.jsx";
import Form from "./Views/Form.jsx";

const App=()=>{
    const [character,setCharacter]=useState([]);
    const onSearch=(id)=>{
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
             if (data.name && character.filter((char)=>char.id===data.id).length===0) {
                setCharacter((oldChars) => [...oldChars, data]);
             } else if(data.name) {window.alert('Ya agregaste ése personaje')}else{
                window.alert(data.error);
             }
          })
          .catch((error)=>window.alert('Server caído'));
      }

    return(
        <div>
            <NavBar onSearch={onSearch} />
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Detail character={character}/>} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </div>
    )
}

export default App;