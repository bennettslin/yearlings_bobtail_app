import { SELECT_WIKI_URL } from '../../components/constants/constants.js';

export const selectWikiUrl = (activeWikiUrl) => {
    return {
        type: SELECT_WIKI_URL,
        payload: activeWikiUrl
    }
}
