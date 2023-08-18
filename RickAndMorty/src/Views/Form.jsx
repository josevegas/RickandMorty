import React from "react";
import { useState,useEffect } from "react";
import Validation from "../Component/Validation";

const Form=(props)=>{
    const [userData,setUserData]=useState({
        userName:'',
        password:'',
    });
    const [error,setError]=useState({
        userName:'',
        password:'',
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({
            ... userData,
            [name]:value,
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError(
            Validation(userData)
        )
        if(!error.name&&!error.password){
            props.login(userData);
        }
    }

    return(
        <div>
            <h1>Aqui el formulario</h1>
        </div>
    )
}

export default Form;