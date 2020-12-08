import React, { Component } from 'react';

export default class AppModal extends Component {
    constructor(props) {
        this.state = {
            isVisible: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = function(){
        const showModal = this.state.showModal;
        this.setState({
            showModal: !showModal
        })
    }

    render() {
        return (
        <div className={ this.state.showModal ? 'app-modal app-modal--is-visible' : 'app-modal' }>
            <div className="app-modal__body">
                Hallo Modal
                <button className="app-btn app-btn--close" onClick={this.toggleModal}>Close</button>
            </div>
        </div>
        )
    }
}
