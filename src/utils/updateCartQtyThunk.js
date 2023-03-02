import axios from "axios";
import Swal from "sweetalert2";
import { getCartThunk } from "../store/slices/cart.slice";
import config from "../store/slices/getConfig";

export const updateCartQtyThunk =
  (cartItemID, counter, cartItemQty) => (dispatch) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${cartItemID}`;
    const data = {
      quantity: counter + cartItemQty,
    };

    axios
      .put(url, data, config)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "The product has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getCartThunk());
      })
      .catch((err) => console.log(err));
  };
