import axios from "axios";

export const getProductsByNameOrCat =
  (data = "title=") =>
  (dispatch) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?${data}`;

    axios
      .get(url)
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  };
