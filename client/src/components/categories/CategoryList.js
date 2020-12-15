import React, { Component } from 'react';
import { getCategories } from '../../actions/category_action';
import { getRandomJoke } from '../../actions/joke_action';
import { connect } from 'react-redux';
import Category from './Category';

class CategoryList extends Component {
    constructor(props){
        super();
        this.state = {
          category: [],
          joke: '',
          loading: true  
        }

        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    // handleCategoryClick = function() {
    //     console.log("category selected");
    // }

    handleCategoryClick = () => {
        console.log("### category clicked ### \n");
        this.props.getRandomJoke();
    }
    
    componentDidMount(){
        console.log("### Component Did Mount \n");
        console.log(this.props);
    }

    componentDidUpdate(prevProps){
        console.log("### Component Did Update \n");
        console.log(this.props.joke);
        if(this.props.joke.loading !== prevProps.joke.loading){
            this.setState({
                joke: this.props.joke.joke
            })
    
            console.log(this.state.joke.loading);
        }
    }

    render() {
        return (
            <div>
                <Category handleCategoryClick={this.handleCategoryClick}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        joke: state.joke
    }
}

export default connect(mapStateToProps, { getCategories, getRandomJoke })(CategoryList);
