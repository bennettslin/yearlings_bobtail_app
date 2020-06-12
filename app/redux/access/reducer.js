// Reducers for accessed values.
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
            return {
                ...state,
                ...isSliderTouched && {
                    isAccessOn: false
                }
            }
        }
        case VIEWPORT_STORE: {
            const { canCarouselMount } = payload
            return {
                ...state,
                ...!canCarouselMount && ACCESS_NAV_DEFAULTS
            }
        }
        default:
            return state
    }
}
