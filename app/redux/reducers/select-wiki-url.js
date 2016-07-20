import { SELECT_WIKI_URL } from '../../components/constants/constants.js';

const selectWikiUrlReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_WIKI_URL:
        return action.payload;
        default:
        return state;
    }
}

export default selectWikiUrlReducer;
