// Reducers for activated state.
import { hasKey } from '../../helpers/action'
import {
    ACTIVATED_STORE,
    SLIDER_STORE
} from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

export default (
    state = ACTIVATED_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ACTIVATED_STORE:
            return {
                ...state,
                ...payload
            }
        case SLIDER_STORE: {
            const { isSliderTouched } = payload
            return hasKey(isSliderTouched) && isSliderTouched ?
                ACTIVATED_DEFAULTS : state
        }
        default:
            return state
    }
}
