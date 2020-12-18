import React, { Component } from 'react';
import { getCategories } from '../../actions/category_action';
import { getRandomJoke } from '../../actions/joke_action';
import { connect } from 'react-redux';
import Category from './Category';
import ModalJoke from '../../widgets/modal/ModalJoke';
import Spinner from '../../widgets/spinner/Spinner';

class CategoryList extends Component {
    constructor(props){
        super();
        this.state = {
          category: [],
          joke: '',
          loadingCategory: true,
          loadingJoke: true,
          showModal: false
        }

        this.renderCategory = this.renderCategory.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.triggerToggleModalJoke = this.triggerToggleModalJoke.bind(this);
    }

    renderCategory = function(categories) {
        if(categories.length > 0 ){
            return categories.map((category, index ) => {
                return (
                <Category key={index} handleCategoryClick={this.handleCategoryClick } category={category} />
                )
            })
        }
    }

    handleCategoryClick = function() {
        console.log("### category clicked ### \n");
        this.props.getRandomJoke();

        this.triggerToggleModalJoke();
    } 

    triggerToggleModalJoke = function() {
        this.refs.app_modal_joke.toggleModalJoke();
    }
    
    componentDidMount(){
        console.log("### Component Did Mount \n");
        this.props.getCategories();
        if(this.props.category){
            this.setState({
                loading: this.props.category.loading
            })

            console.log(this.props.category);

        }
    }

    componentDidUpdate(prevProps){
        console.log("### Component Did Update \n");
        console.log(this.props.joke);
        console.log(this.props.category);
        //typescript can be useful here
        if( this.props.category.category !== prevProps.category.category ){
            this.setState({
                category: this.props.category.category,
                loadingCategory: this.props.category.loading
            });
        }
        else if (this.props.joke.joke !== prevProps.joke.joke){
            this.setState({ 
                joke: this.props.joke.joke,
                loadingJoke: this.props.joke.loading
            });
        }
    }

    render() {
        const {
            category,
            joke,
            loadingCategory,
            loadingJoke
        } = this.state
        return (
            <div>
                {
                    loadingCategory
                    ?
                    <Spinner />
                    :
                    this.renderCategory(category) 
                }
                <ModalJoke 
                    ref="app_modal_joke"
                    joke={ joke } 
                    loadingJoke={ loadingJoke }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        joke: state.joke
    }
}

export default connect(mapStateToProps, { getCategories, getRandomJoke })(CategoryList);
