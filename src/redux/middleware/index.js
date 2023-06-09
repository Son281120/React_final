import axios from "axios";
import { fetchProductsStart,fetchProductsSuccess, fetchProductsFailure } from "../store/productSlice";

const fetchingProducts =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const response = await axios.get(
        "https://peguinauth.onrender.com/products"
      );
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };

export default fetchingProducts ;
