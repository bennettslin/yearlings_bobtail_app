import { ANNOTATION_INDEX } from '../../helpers/constants.js'
import SessionHelper from '../../helpers/session-helper.js'

const storedAnnotationIndex = SessionHelper.getFromSession(ANNOTATION_INDEX)

const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export default AnnotationIndexReducer
