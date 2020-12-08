import { gql } from 'apollo-boost';

export const QUERY_RANDOM_JOKE = gql`
query GetRandomJoke {
random_joke {
value
    }
}
`;