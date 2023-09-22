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
                <div className="space-y-12">
                    <div  className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario:</label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input 
                                        type="text" 
                                        name="userName" 
                                        id="username"
                                        value={userData.userName} 
                                        onChange={handleChange} 
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {(error.userName&&isSubmit)? <p>{error.userName}</p>: null}
                </div>
                <div>
                    <div>
                        <div>
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
                {sign?<button type="submit" className="btn">Registrar</button>:<button type="submit" className="btn">Ingresar</button>}
            </form>
            {!sign?<button onClick={handleSign} className="btn">Registrarse</button>:null}
        </div>
    )
}

export default Form;