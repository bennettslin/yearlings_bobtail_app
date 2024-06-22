// Reducers for accessed values.
import { hasKey } from '../../helpers/action'
import {
    ACCESS_STORE,
    DOTS_STORE,
    SLIDER_STORE,
    VIEWPORT_STORE,
    TOGGLE_STORE,
} from '../../constants/store'
import {
    ACCESS_NAV_DEFAULTS,
    ACCESS_DOT_DEFAULTS,
    ACCESS_PROMO_PAGE_DEFAULTS,
    getAccessDefaults,
} from './default'

export const getAccessReducer = ({
    initialAnnotationIndex,
    isPromoPage,
}) => (
    isPromoPage ? (
        state = ACCESS_PROMO_PAGE_DEFAULTS,
        { type, payload },
    ) => {
        switch (type) {
            case ACCESS_STORE:
                return {
                    ...state,
                    ...payload,
                }
            default:
                return state
        }
    } : (
        state = getAccessDefaults(initialAnnotationIndex),
        { type, payload },
    ) => {
        switch (type) {
            case ACCESS_STORE:
                return {
                    ...state,
                    ...payload,
                }
            case DOTS_STORE: {
                const { dotIndex } = payload
                return hasKey(dotIndex) ? {
                    ...state,
                    // Make most recently toggled dot the accessed dot.
                    accessedDotIndex: dotIndex,
                } : state
            }
            case SLIDER_STORE: {
                const { isSliderTouched } = payload
                return hasKey(isSliderTouched) && isSliderTouched ? {
                    ...state,
                    isAccessOn: false,
                } : state
            }
            case TOGGLE_STORE: {
                const { isDotsSlideShown } = payload
                return hasKey(isDotsSlideShown) ? {
                    ...state,
                    ...isDotsSlideShown ? {
                        accessedDotIndex: 0,
                    } : ACCESS_DOT_DEFAULTS,
                } : state
            }
            case VIEWPORT_STORE: {
                const { canCarouselNavMount } = payload
                return hasKey(canCarouselNavMount) && !canCarouselNavMount ? {
                    ...state,
                    ...ACCESS_NAV_DEFAULTS,
                } : state
            }
            default:
                return state
        }
    }
)
