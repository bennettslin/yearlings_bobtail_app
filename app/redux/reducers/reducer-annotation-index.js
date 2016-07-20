import { ANNOTATION_INDEX } from '../../components/constants/constants.js';
import SessionHelper from '../../components/helpers/session-helper.js';

const storedAnnotationIndex = SessionHelper.getFromSession(ANNOTATION_INDEX);

const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case ANNOTATION_INDEX:
        return action.payload;
        default:
        return state;
    }
}

export default AnnotationIndexReducer;
