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
        <div className="yCenter">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div  className="xCenter">
                        <div className="yCenter">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario:</label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        id="email"
                                        value={userData.email} 
                                        onChange={handleChange} 
                                        className="boxinput"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {(error.email&&isSubmit)? <p>{error.email}</p>: null}
                </div>
                <div>
                    <div className="xCenter">
                        <div className="yCenter">
                            <label htmlFor="password">Contraseña:</label>
                            <div>
                                <div>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={userData.password} 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div>
                {(error.password&&isSubmit)? <p>{error.password}</p>: null}
                </div>
                <div className="xJustify">
                    {sign?<button type="submit" className="btn">Registrar</button>:<button type="submit" className="btn">Ingresar</button>}
                    {!sign?<button onClick={handleSign} className="btn">Registrarse</button>:null}
                </div>
            </form>
        </div>
    )
}

export default Form;