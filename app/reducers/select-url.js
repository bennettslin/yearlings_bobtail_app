import { SELECT_URL } from '../components/constants/constants.js';

export default function(state = null, action) {
    switch (action.type) {
        case SELECT_URL:
        return Object.assign(state, action.payload);
        default:
        return state;
    }
}
