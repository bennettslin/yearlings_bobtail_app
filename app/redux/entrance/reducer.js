import { hasKey } from '../../helpers/action'
import {
    ENTRANCE_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { ENTRANCE_DEFAULTS } from './default'

export default (
    state = ENTRANCE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ENTRANCE_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const {
                selectedSongIndex,
                selectedSceneIndex
            } = payload

            return {
                ...state,
                ...hasKey(selectedSongIndex) && { isSongChangeDone: false },
                ...hasKey(selectedSceneIndex) && { isSceneChangeDone: false }
            }
        }
        default:
            return state
    }
}
