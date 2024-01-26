import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: null,
  description: "",
  image: "",
  rating: null,
  stock: null,
  brand: "",
  category: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
