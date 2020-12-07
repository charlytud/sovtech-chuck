import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

export default function Header() {    

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

    
    const categories = useQuery(QUERY_CATEGORIES);
    console.log("### Categories ###");
    console.log(categories);

    const joke = useQuery(QUERY_RANDOM_JOKE);
    console.log("### Random Joke ###");
    console.log(joke);

    return (
        <div className="app-header">
            <h1>Hallo SovTech!</h1>
                <ul>
                    <li>Full Stack Engineer Test - Chuck</li>
                    <li>Candidate: Georges C. Takoudjou</li>
                    <li>C/W: 071 618 1209</li>
                </ul>
        </div>
    )
}
