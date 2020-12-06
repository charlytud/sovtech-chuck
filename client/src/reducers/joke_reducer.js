import { GET_RANDOM_JOKE } from "../actions/types";
import { JOKE_LOADING } from "../actions/types";

const initialState = {
  joke: {},
  loading: true,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_JOKE:
      return {
        ...state,
        joke: action.payload,
        loading: false
      };
    case JOKE_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};
