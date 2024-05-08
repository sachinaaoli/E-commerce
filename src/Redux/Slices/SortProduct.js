import {createSlice} from "@reduxjs/toolkit";
import { fetchSortProduct } from "../../services/allProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
  };
const SortProduct =createSlice({
    name: "sortproduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSortProduct.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSortProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchSortProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default SortProduct.reducer;