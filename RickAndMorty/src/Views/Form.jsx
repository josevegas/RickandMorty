import React from "react";
import { useState,useEffect } from "react";
import Validation from "../Component/Validation.js";

const Form=(props)=>{
    const [userData,setUserData]=useState({
        userName:'',
        password:'',
    });
    const [error,setError]=useState({
        userName:'',
        password:'',
    });
    const [isSubmit,setIsSubmit]=useState(false)
    const [sign,setSign]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setIsSubmit(false);
        setUserData({
            ... userData,
            [name]:value,
        });
        setError(Validation({
            ... userData,
            [name]:value,
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(error)
        setIsSubmit(true)
        if(!error.userName && !error.password && userData.userName && userData.password){
            if(sign){
                props.sign(userData)
            }else{
                props.login(userData);
            }
            // window.alert('Acceso')
        }else{
            setError(Validation(userData))
            window.alert('Cuidado')
        }
    }
    const handleSign=(e)=>{
        e.preventDefault();
        setError({
            userName:'',
            password:'',
        })
        setSign(true)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="">Usuario:</label>
                <input type="text" name="userName" value={userData.userName} onChange={handleChange}/>
                </div>
                <div>
                {(error.userName&&isSubmit)? <p>{error.userName}</p>: null}
                </div>
                <div>
                <label htmlFor="">Contraseña:</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                </div>
                <div>
                {(error.password&&isSubmit)? <p>{error.password}</p>: null}
                </div>
                {sign?<button type="submit">Registrar</button>:<button type="submit">Ingresar</button>}
            </form>
            {!sign?<button onClick={handleSign}>Registrarse</button>:null}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
        </div>
    )
}

export default Form;