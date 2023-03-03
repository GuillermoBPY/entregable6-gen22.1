import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCart: (state, action) => action.payload,
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCartThunk = (config) => (dispatch) => {
  if (localStorage.getItem("token")) {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

    axios
      .get(url, config)
      .then((res) => dispatch(setCart(res.data)))
      .catch((err) => err);
  }
};
