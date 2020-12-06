import { combineReducers } from 'redux';
import category from './category_reducer';
import joke from './joke_reducer';

const rootReducer = combineReducers({
    category,
    joke
});

export default rootReducer;