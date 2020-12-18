import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import {
  GET_RANDOM_JOKE,
  JOKE_LOADING
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
    //console.log("init");
    dispatch({ type: JOKE_LOADING, payload: true });
    const joke = await useQuery(QUERY_RANDOM_JOKE);
    //const joke = "Chuck Norris was born when the roundhouse kicks were two minutes apart.";
    dispatch({ type: GET_RANDOM_JOKE, payload: joke });
  } catch (error) {
    // const err = JSON.parse(error);
    // dispatch({ type: GET_ERRORS, payload: err });
  }
};
