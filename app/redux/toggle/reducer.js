// Reducers for toggle buttons and options.
import {
    TOGGLE_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { TOGGLE_DEFAULTS } from './default'

export default (
    state = TOGGLE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case TOGGLE_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const { isSelectedLogue } = payload
            return {
                ...state,
                ...isSelectedLogue && {
                    isDotsSlideShown: false
                }
            }
        }
        default:
            return state
    }
}
