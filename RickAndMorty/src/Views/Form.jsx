import React from "react";
import { useState,useEffect } from "react";

const Form=()=>{
    const [userData,setUserData]=useState({
        userName:'',
        password:'',
    })

    return(
        <div>
            <h1>Aqui el formulario</h1>
        </div>
    )
}

export default Form;