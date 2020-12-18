import { useQuery } from 'react-apollo';
import { QUERY_CATEGORIES } from '../graphql/category-queries';

import {
  GET_CATEGORIES,
  CATEGORY_LOADING,
} from "./types";

export const getCategories = () => async dispatch => {
  try {
    dispatch({ type: CATEGORY_LOADING, payload: true });
    const categories = await useQuery(QUERY_CATEGORIES);
    // const categories = [
    //   "animal",
    //   "career",
    //   "celebrity",
    //   "dev",
    //   "explicit",
    //   "fashion",
    //   "food",
    //   "history",
    //   "money",
    //   "movie",
    //   "music",
    //   "political",
    //   "religion",
    //   "science",
    //   "sport",
    //   "travel"
    // ];
    
    dispatch({ type: GET_CATEGORIES, payload: categories });
  } catch (error) {
    // const err = JSON.parse(error);
    // dispatch({ type: GET_ERRORS, payload: err });
  }
};
