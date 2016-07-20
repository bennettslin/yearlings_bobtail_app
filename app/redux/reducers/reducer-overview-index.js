import { OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from '../../components/constants/constants.js';
import SessionHelper from '../../components/helpers/session-helper.js';

const storedOverviewIndex = SessionHelper.getFromSession(OVERVIEW_INDEX);

const OverviewIndexReducer = (state = storedOverviewIndex || DEFAULT_OVERVIEW_INDEX, action) => {
    switch (action.type) {
        case OVERVIEW_INDEX:
        return action.payload;
        default:
        return state;
    }
}

export default OverviewIndexReducer;
