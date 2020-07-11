// Reducers for song and player state.
import { SELECTED_STORE } from '../../constants/store'
import { getSelectedDefaults } from './default'

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
