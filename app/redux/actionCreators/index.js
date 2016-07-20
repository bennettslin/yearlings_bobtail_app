import { SELECT_URL } from '../../components/constants/constants.js';

export function selectUrl(url) {
    return {
        type: SELECT_URL,
        payload: url
    }
}
