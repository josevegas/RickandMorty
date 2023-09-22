import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    allCards:[],
    favoriteCards:[],
    user:null,
    loggin:false,
};

export const cardSlice=createSlice(
    {
        name: "card",
        initialState,
        reducers:{
            addMyFavorite:(state,action)=>{
                state.allCards=action.payload;
                state.favoriteCards=action.payload;
            },
            getLoginCase:(state,action)=>{
                state.loggin=action.payload;
            }
        }
    }
);

export const {
    addMyFavorite,
    getLoginCase,
}=cardSlice.actions;

export default cardSlice;

export const getLoginAction=(email,password)=>async (dispatch)=>{
    try {
        const isLogin= await axios
        .get(`/user/${email}/${password}`)
        .then((r)=>r.data);
        dispatch(getLoginCase(isLogin));
    } catch (error) {
        console.log(error)
    }
}