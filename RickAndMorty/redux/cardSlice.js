import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allCards:[],
    favoriteCards:[],
};

export const cardSlice=createSlice(
    {
        name: "card",
        initialState,
        reducers:{
            addMyFavorite:(state,action)=>{
                state.allCards=action.payload;
                state.favoriteCards=action.payload;
            }
        }
    }
);

export const {
    addMyFavorite,
}=cardSlice.actions;

export default cardSlice;