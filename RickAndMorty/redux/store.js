import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardSlice'

const store=configureStore({
    reducer: {
        cardsReducer,
    },
});

export default store;