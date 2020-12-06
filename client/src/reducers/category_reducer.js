import { GET_CATEGORIES } from "../actions/types";
import { CATEGORY_LOADING } from "../actions/types";

const initialState = {
  category: [],
  loading: true,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        category: action.payload,
        loading: false
      };
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
