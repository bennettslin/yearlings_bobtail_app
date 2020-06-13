// Reducers for accessed values.
import { hasKey } from '../../helpers/action'
import {
    ACCESS_STORE,
    SLIDER_STORE,
    VIEWPORT_STORE
} from '../../constants/store'
import {
    ACCESS_DEFAULTS,
    ACCESS_NAV_DEFAULTS
} from './default'

export default (
    state = ACCESS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ACCESS_STORE:
            return {
                ...state,
                ...payload
            }
        case SLIDER_STORE: {
            const { isSliderTouched } = payload
            return hasKey(isSliderTouched) && isSliderTouched ? {
                ...state,
                isAccessOn: false
            } : state
        }
        case VIEWPORT_STORE: {
            const { canCarouselMount } = payload
            return hasKey(canCarouselMount) && !canCarouselMount ? {
                ...state,
                ...ACCESS_NAV_DEFAULTS
            } : state
        }
        default:
            return state
    }
}
