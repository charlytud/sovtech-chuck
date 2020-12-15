import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import {
  GET_CATEGORIES,
  CATEGORY_LOADING,
} from "./types";

const QUERY_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export const getCategories = () => async dispatch => {
  try {
    dispatch({ type: CATEGORY_LOADING, payload: true });
    const categories = await useQuery(QUERY_CATEGORIES);
    dispatch({ type: GET_CATEGORIES, payload: categories });
  } catch (error) {
    // const err = JSON.parse(error);
    // dispatch({ type: GET_ERRORS, payload: err });
  }
};
