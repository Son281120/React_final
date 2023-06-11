import axios from "axios";
import { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailure } from "../store/categorySlice";

const fetchingCategory =
    (params = {}) =>
        async (dispatch) => {
            try {
                dispatch(fetchCategoryStart());
                const response = await axios.get(
                    "https://peguinauth.onrender.com/category"
                );
                dispatch(fetchCategorySuccess(response.data));
            } catch (error) {
                dispatch(fetchCategoryFailure(error.message));
            }
        };

export default fetchingCategory;