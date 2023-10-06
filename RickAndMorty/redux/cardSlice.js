import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

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
            addMyFavorite:(state,action)=>{
                state.allCards=action.payload;
                state.favoriteCards=action.payload;
            },
            getLoginCase:(state,action)=>{
                state.user=action.payload.email;
                state.login=action.payload.isLogin;
            }
        }
    }
);

export const {
    addMyFavorite,
    getLoginCase,
}=cardsSlice.actions;

export default cardsSlice.reducer;

export const getLoginAction=(email,password)=>async (dispatch)=>{
    try {
        const isLogin= await axios
        .get(`http://localhost:3001/user/${email}/${password}`)
        .then((r)=>r.data);
        dispatch(getLoginCase(email,isLogin));
    } catch (error) {
        console.log(error)
    }
}