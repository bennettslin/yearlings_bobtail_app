import { combineReducers } from 'redux';
import SelectUrlReducer from './select-url.js';

const rootReducer = combineReducers({
    url: SelectUrlReducer
});

export default rootReducer;
