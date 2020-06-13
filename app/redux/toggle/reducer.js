// Reducers for toggle buttons and options.
import {
    TOGGLE_STORE,
    SELECTED_STORE,
    VIEWPORT_STORE
} from '../../constants/store'
import { TOGGLE_DEFAULTS } from './default'
import { hasKey } from '../../helpers/action'

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
            const {
                isSelectedLogue,
                selectedDotsBit
            } = payload
            return {
                ...state,
                ...hasKey(isSelectedLogue) && isSelectedLogue && {
                    isDotsSlideShown: false
                },
                /**
                 * If there are no selected dots, there are no carousel
                 * annotations to show. (May not be needed, because dots can
                 * only be deselected when carousel is not shown?)
                 */
                ...hasKey(selectedDotsBit) && !selectedDotsBit && {
                    isCarouselShown: false
                }
            }
        }
        case VIEWPORT_STORE: {
            const { canCarouselMount } = payload
            return hasKey(canCarouselMount) && !canCarouselMount ? {
                ...state,
                isCarouselShown: false,
                isNavShown: false
            } : state
        }
        default:
            return state
    }
}
