import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchStore", async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json()
})
 
export const storeSlice = createSlice({
    name: 'Fake_Store',
    initialState:{
        isLoading: false,
        data: null,
        isError: false
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchData.pending, (state, action)=>{
            state.isLoading = true;
        });

        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;

        });

        builder.addCase(fetchData.rejected, (state, action)=>{
            console.log("Error", action.payload);
            state.isError = true;
            
        });
    },
});

export default storeSlice.reducer