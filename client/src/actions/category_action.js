import { gql, useQuery } from '@apollo/client';

import {
  GET_CATEGORIES,
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
