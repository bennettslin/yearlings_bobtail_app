import { combineReducers } from 'redux';
import SelectUrlReducer from './select-url.js';

const rootReducer = combineReducers({
    selectUrl: SelectUrlReducer
});

export default rootReducer;
