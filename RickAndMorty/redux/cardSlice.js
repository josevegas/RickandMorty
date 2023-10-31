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
            },
            getFavCase: (state,action)=>{
                const idFav=action.payload.map(char=>char.id);
                state.favoriteCards=idFav;
                state.allCards=action.payload;
            },
            delFavCase: (state,action)=>{
                state.favoriteCards=state.favoriteCards.filter(card=>card!==action.payload)
            }
        }
    }
);

export const {
    addMyFavoriteCase,
    getLoginCase,
    getCharCase,
    delCharCase,
    getFavCase,
    delFavCase,
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
export const getFavAction=(email)=>async (dispatch)=>{
    try {
        const favChar=await axios
        .get(`user/${email}`)
        .then((r)=>r.data);
        dispatch(getFavCase(favChar));
    } catch (error) {
        console.log(error)
    }
}
export const delFavAction=(email,id)=> async (dispatch)=>{
    try {
        await axios
        .delete(`card/${email}/${id}`)
        .then((r)=>r.data);
        dispatch(delFavCase(id))
    } catch (error) {
        console.log(error)
    }
}