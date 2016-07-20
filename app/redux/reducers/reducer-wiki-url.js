import { WIKI_URL } from '../../helpers/constants.js';

const WikiUrlReducer = (state = null, action) => {
    switch (action.type) {
        case WIKI_URL:
        return action.payload;
        default:
        return state;
    }
}

export default WikiUrlReducer;
