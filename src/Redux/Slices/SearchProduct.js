import {createSlice} from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../services/allProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
  };
const SearchProduct =createSlice({
    name: "searchproduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearchProduct.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSearchProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchSearchProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default SearchProduct.reducer;