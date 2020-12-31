// Reducers for viewport size.
import { VIEWPORT_STORE } from '../../constants/store'
import {
    VIEWPORT_DEFAULTS,
    VIEWPORT_PITCH_PAGE_DEFAULTS,
} from './default'

export default (
    state = VIEWPORT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const ViewportPitchPageReducer = (
    state = VIEWPORT_PITCH_PAGE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
