import React from "react";
import { useState,useEffect } from "react";
import Validation from "../Component/Validation.js";

const Form=(props)=>{
    const [userData,setUserData]=useState({
        email:'',
        password:'',
    });
    const [error,setError]=useState({
        email:'',
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
        setIsSubmit(true)
        if(!error.email && !error.password && userData.email && userData.password){
            if(sign){
                props.sign(userData)
            }else{
                props.login(userData)
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
            email:'',
            password:'',
        })
        setSign(true)
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div  className="mb-3">
                    <label htmlFor="username" className="form-label text-bg-dark">Usuario:</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={userData.email} 
                        onChange={handleChange} 
                        className="form-control"
                        style={{width: '500px'}}
                    />
                </div>
                <div>
                {(error.email&&isSubmit)? <p className="errorForm">{error.email}</p>: null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-bg-dark">Contraseña:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleChange}
                        className="form-control"
                        style={{width: '500px'}}
                    /> 
                </div>
                <div>
                {(error.password&&isSubmit)? <p className="errorForm">{error.password}</p>: null}
                </div>
                <div className="xJustify">
                    {sign?<button type="submit" className="btn btn-primary m-2">Registrar</button>:<button type="submit" className="btn btn-primary m-2">Ingresar</button>}
                    {!sign?<button type="button" onClick={handleSign} className="btn btn-primary m-2">Registrarse</button>:null}
                </div>
            </form>
        </div>
    )
}

export default Form;