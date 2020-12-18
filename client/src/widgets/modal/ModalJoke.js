import React, { Component } from 'react';
import Joke from '../../components/joke/Joke'

export default class AppModal extends Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false
        }

        this.toggleModalJoke = this.toggleModalJoke.bind(this);
    }

    toggleModalJoke = function(){
        const showModal = this.state.showModal;
        this.setState({
            showModal: !showModal,
        })
    }

    render() {
        const {
            loadingJoke,
            joke
        } = this.props
        return (
        <div className={ this.state.showModal ? 'app-modal_joke app-modal_joke--is-visible' : 'app-modal_joke' }>
            <div className="app-modal_joke__body">
                { 
                    loadingJoke
                    ?
                    <div>Loading...</div>
                    :
                    <Joke joke={joke} />
                }   
                <button className="app-btn app-btn--modal" onClick={this.toggleModalJoke}>Close</button>
            </div>
        </div>
        )
    }
}
