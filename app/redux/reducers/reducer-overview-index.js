import { OVERVIEW_INDEX } from '../../helpers/constants.js';
import SessionHelper from '../../helpers/session-helper.js';

const storedOverviewIndex = SessionHelper.getFromSession(OVERVIEW_INDEX);

const OverviewIndexReducer = (state = storedOverviewIndex, action) => {
    switch (action.type) {
        case OVERVIEW_INDEX:
        return action.payload;
        default:
        return state;
    }
}

export default OverviewIndexReducer;
