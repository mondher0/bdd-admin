import { baseUrl } from "@/lib/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: "",
  name: "",
  price: "",
  description: "",
  image: "",
  rating: "",
  stock: "",
  brand: "",
  category: "",
  loading: false,
  error: false,
};

// add product
export const addProduct = createAsyncThunk(
  "product/add",
  async (product, { rejectWithValue }) => {
    console.log(product);
    const { name, price, description, image, rating, stock, brand, category } =
      product;
    const data = {
      name: name,
      price: price,
      description: description,
      image: image,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
    };
    try {
      const response = await axios.post(`${baseUrl}products/add`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.detail);
    }
  },
);

// update product
export const updateProduct = createAsyncThunk(
  "product/update",
  async (product, { rejectWithValue }) => {
    console.log(product);
    const {
      id,
      name,
      price,
      description,
      image,
      rating,
      stock,
      brand,
      category,
    } = product;
    const data = {
      name: name,
      price: price,
      description: description,
      image: image,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
    };
    try {
      const response = await axios.patch(
        `${baseUrl}products/update/${id}`,
        data,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.detail);
    }
  },
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const { payload } = action;
      state.id = payload.id;
      state.name = payload.name;
      state.price = payload.price;
      state.description = payload.description;
      state.image = payload.image;
      state.stock = payload.stock;
      state.brand = payload.brand;
      state.category = payload.category;
      state.rating = payload.rating;
    },
    editProduct: (state, action) => {
      console.log(action.payload);
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "Something went wrong";
    });
    builder.addCase(updateProduct.pending, (state, action) => {
      console.log(action);
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "Something went wrong";
    });
    builder.addCase(addProduct.pending, (state, action) => {
      console.log(action);
      state.loading = true;
    });
  },
});
export const { setProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
