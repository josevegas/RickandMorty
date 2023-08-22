import React,{ useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Home from './Views/Home.jsx';
import NavBar from './Views/NavBar.jsx';
import About from "./Views/About.jsx";
import Detail from "./Views/Detail.jsx";
import Favorite from "./Views/Favorite.jsx";
import Form from "./Views/Form.jsx";

const App=()=>{
    const [character,setCharacter]=useState([]);
    const [access,setAccess]=useState(false);
    const navigate=useNavigate();
    const onSearch=(id)=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    const login=(userData)=>{
        const { userName, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        axios(URL + `?userName=${userName}&password=${password}`).then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
        });
    };
    const sign=(userData)=>{
        const {userName,password}=userData;
        const URL='http://localhost:3001/rickandmorty/sign/';
        axios(URL+`?userName=${userName}&password=${password}`).then(({data})=>{
            const {access}=data;
            setAccess(data);
        })
    }
    useEffect(()=>{
        !access&&navigate('/');
    },[access,navigate]);

    return(
        <div>
            {location.pathname !=="/" && <NavBar onSearch={onSearch} />}
            <Routes>
                <Route path="/" element={<Form login={login} sign={sign}/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Detail character={character}/>} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </div>
    )
}

export default App;