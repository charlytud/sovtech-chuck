import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './routes';
import { composeWithDevTools } from 'redux-devtools-extension';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import * as serviceWorker from './serviceWorker';

import './App.scss';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare, ReduxThunk)(createStore);

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/'
})

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Provider store={ createStoreWithMiddleware(reducers) }>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
