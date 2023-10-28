import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
//const URL='https://rickandmorty-production-7404.up.railway.app/'

const initialState={
    allCards:[],
    favoriteCards:[],
    user:null,
    login:false,
};

export const cardsSlice=createSlice(
    {
        name: "cards",
        initialState,
        reducers:{
            addMyFavoriteCase:(state,action)=>{
                state.favoriteCards=[...state.favoriteCards,action.payload];
            },
            getLoginCase:(state,action)=>{
                state.user=action.payload.email;
                state.login=action.payload.isLogin;
            },
            getCharCase:(state,action)=>{
                state.allCards=[...state.allCards,action.payload];
            },
            delCharCase: (state,action)=>{
                const id=action.payload;
                state.allCards=state.allCards.filter((card)=>Number(card.id)!==Number(id));
            }
        }
    }
);

export const {
    addMyFavoriteCase,
    getLoginCase,
    getCharCase,
    delCharCase,
}=cardsSlice.actions;

export default cardsSlice.reducer;

export const getLoginAction=(email,password)=>async (dispatch)=>{
    try {
        const isLogin= await axios
        .get(`user/${email}/${password}`)
        .then((r)=>r.data);
        dispatch(getLoginCase({email,isLogin}));
    } catch (error) {
        console.log(error)
    }
}
export const getCharAction=(id)=> async (dispatch)=>{
    try {
        const char= await axios
        .get(`card/${id}`)
        .then((r)=>r.data);
        dispatch(getCharCase(char))
    } catch (error) {
        console.log(error)
    }
}
export const delCharAction=(id)=> (dispatch)=>{
    dispatch(delCharCase(id))
}
export const addMyFavoriteAction=(email,id)=>async (dispatch)=>{
    try {
        await axios
        .post(`card/${email}/${id}`)
        .then((r)=>r.data);
        dispatch(addMyFavoriteCase(id))
    } catch (error) {
        console.log(error)
    }
}