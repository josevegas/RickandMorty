import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
//const URL='https://rickandmorty-production-7404.up.railway.app/'

const initialState={
    allCards:[],
    currentCards:[],
    prefFilters:[],
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
                state.currentCards=state.allCards;
                state.prefFilters=state.currentCards;
            },
            delCharCase: (state,action)=>{
                const id=action.payload;
                state.allCards=state.allCards.filter((card)=>Number(card.id)!==Number(id));
                state.currentCards=state.allCards;
                state.prefFilters=state.currentCards;
            },
            getFavCase: (state,action)=>{
                const idFav=action.payload.map(char=>char.id);
                state.favoriteCards=idFav;
                state.allCards=action.payload;
                state.currentCards=action.payload;
            },
            delFavCase: (state,action)=>{
                state.favoriteCards=state.favoriteCards.filter(card=>card!==action.payload);
            },
            filterGenderCase: (state,action)=>{
                if(action.payload==='all'){
                    state.currentCards=state.allCards;
                    state.prefFilters=state.currentCards;
                }else{
                    state.currentCards=state.allCards.filter(card=>card.gender===action.payload);
                    state.prefFilters=state.currentCards;
                }
            },
            filterStatusCase: (state,action)=>{
                if(action.payload==='all'){
                    state.currentCards=state.prefFilters
                }else{
                    state.currentCards=state.prefFilters.filter(card=>card.status===action.payload);
                }
            },
            orderCharCase: (state,action)=>{
                const ordered=state.allCards.sort((a,b)=>{
                    if(action.payload!=='rdm'){
                        if(a.name>b.name){
                            return action.payload==='asc'?1:-1;
                        }else{
                            return action.payload==='des'?1:-1;
                        }
                    }
                });
                state.currentCards=ordered;
            },
            discardFilterCase: (state)=>{
                state.currentCards=state.allCards;
                state.prefFilters=state.currentCards;
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
    filterGenderCase,
    filterStatusCase,
    orderCharCase,
    discardFilterCase,
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
        dispatch(delFavCase(id));
    } catch (error) {
        console.log(error)
    }
}
export const filterGenderAction=(gender)=>(dispatch)=>{
    dispatch(filterGenderCase(gender));
}
export const filterStatusAction=(status)=>(dispatch)=>{
    dispatch(filterStatusCase(status));
}
export const orderCharAction=(order)=>(dispatch)=>{
    dispatch(orderCharCase(order));
}
export const discardFilterAction=()=>(dispatch)=>{
    dispatch(discardFilterCase())
}