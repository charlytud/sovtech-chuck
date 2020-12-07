import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

export default function Home() {
const QUERY_RANDOM_JOKE = gql`
    query GetRandomJoke {
    random_joke {
    value
        }
    }
    `;

const QUERY_CATEGORIES = gql`
    query GetCategories {
    categories {
    name
        }
    }
    `;

    // const joke = useQuery(QUERY_RANDOM_JOKE);
    // console.log(joke);

    const categories = useQuery(QUERY_CATEGORIES);
    console.log(categories);
    
    return (
        <div className="app-home">
            <h2>Hallo Sovtech</h2>

            <div className="app-home__category-list">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
