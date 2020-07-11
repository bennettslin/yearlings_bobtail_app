// Reducers for song and player state.
import { SELECTED_STORE } from '../../constants/store'
import { SELECTED_DEFAULTS, getSelectedDefaults } from './default'

export default (
    state = SELECTED_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

/** */

export const getSelectedReducer = songIndex => (
    state = getSelectedDefaults(songIndex),
    { type, payload }
) => {
    switch (type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
