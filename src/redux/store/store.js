import { configureStore } from "@reduxjs/toolkit";
import storeReducer from '../slices/storeSlices'

export const store = configureStore({
    reducer:{
        
        storedata: storeReducer
    }
})