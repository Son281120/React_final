import axios from "axios";
import { fetchProducts } from "../store/productSlice";

const fetchingProducts =
  (params = {}) =>
  async (dispatch) => {
    const response = await axios.get(
      "https://645a3d6495624ceb21fbe1be.mockapi.io/api/v1/products"
    );
    dispatch(fetchProducts(response.data));
  };

export { fetchingProducts };
