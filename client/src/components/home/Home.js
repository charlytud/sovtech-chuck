import React, { Component } from 'react'
import Header from '../header/Header';
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

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}
