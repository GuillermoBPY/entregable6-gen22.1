import axios from "axios";
import Swal from "sweetalert2";
import { getCartThunk } from "../store/slices/cart.slice";
import config from "../store/slices/getConfig";

export const purchaseCartThunk = () => (dispatch) => {
  Swal.fire({
    title: "Check Out Ho!",
    text: "Do you want to check out your cart?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, buy it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
      axios
        .post(url, {}, config)
        .then((res) => {
          res;
          Swal.fire(
            "Thank you for your purchase!",
            "We hope you enjoyed your shopping experience with us.",
            "success"
          );
          dispatch(getCartThunk());
        })
        .catch((err) => err);
    }
  });
};
