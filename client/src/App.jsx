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


    return(
        <div>
            <NavBar />
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