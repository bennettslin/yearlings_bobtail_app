// Reducers for activated state.
import { hasKey } from '../../helpers/action'
import {
    ACTIVATED_STORE,
    SELECTED_STORE,
    SLIDER_STORE,
} from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

export default (
    state = ACTIVATED_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case ACTIVATED_STORE:
            return {
                ...state,
                ...payload,
            }
        case SELECTED_STORE: {
            const { selectedSongIndex } = payload
            return hasKey(selectedSongIndex) ?
                ACTIVATED_DEFAULTS :
                state
        }
        case SLIDER_STORE: {
            const { isSliderTouched } = payload
            return hasKey(isSliderTouched) && isSliderTouched ?
                ACTIVATED_DEFAULTS :
                state
        }
        default:
            return state
    }
}
