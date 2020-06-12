// Reducers for audio updates.
import { hasKey } from '../../helpers/action'
import {
    AUDIO_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { AUDIO_DEFAULTS } from './default'

export default (
    state = AUDIO_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case AUDIO_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const { isSelectedLogue } = payload
            return {
                ...state,
                ...hasKey(isSelectedLogue) && isSelectedLogue && {
                    isPlaying: false
                }
            }
        }
        default:
            return state
    }
}
