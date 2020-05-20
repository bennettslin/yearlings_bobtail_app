// Reducers for event values.
import { SCENE_STORE } from '../../constants/store'
import { SCENE_DEFAULTS } from './default'

export default (
    state = SCENE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SCENE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
