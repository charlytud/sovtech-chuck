import { gql } from 'apollo-boost';

export const QUERY_CATEGORIES = gql`
    query GetCategories {
    categories {
    name
        }
    }
    `;
