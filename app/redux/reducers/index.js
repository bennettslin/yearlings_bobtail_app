import { combineReducers } from 'redux';
import SelectWikiUrlReducer from './select-wiki-url.js';

const rootReducer = combineReducers({
    activeWikiUrl: SelectWikiUrlReducer
});

export default rootReducer;
