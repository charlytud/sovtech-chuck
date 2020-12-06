import { gql, useQuery } from '@apollo/client';

import {
  GET_RANDOM_JOKE,
} from "./types";

const QUERY_RANDOM_JOKE = gql`
  query GetRandomJoke {
    random_joke {
      value
    }
  }
`;

export const getRandomJoke = () => async dispatch => {
  try {
    dispatch({ type: JOKE_LOADING, payload: true });
    const joke = await useQuery(QUERY_RANDOM_JOKE);
    dispatch({ type: GET_RANDOM_JOKE, payload: joke });
  } catch (error) {
    // const err = JSON.parse(error);
    // dispatch({ type: GET_ERRORS, payload: err });
  }
};
