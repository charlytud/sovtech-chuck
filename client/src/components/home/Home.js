import React, { Component } from 'react'
import Header from '../header/Header';
import CategoryList from '../categories/CategoryList

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <CategoryList />
            </div>
        )
    }
}
