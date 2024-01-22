import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/AmountSlice";
import  CartReducer from "./Slices/CardSlice";
import  ProductReducer from "./Slices/ProductSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer,
    product: ProductReducer,
  },
});

export default store;
