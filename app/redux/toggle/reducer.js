// Reducers for toggle buttons and options.
import { hasKey } from '../../helpers/action'
import { mapIsLyricExpandable } from '../lyricExpand/selector'
import {
    TOGGLE_STORE,
    SELECTED_STORE,
    VIEWPORT_STORE
} from '../../constants/store'
import { TOGGLE_DEFAULTS } from './default'
import { mapCanScoreMount } from '../viewport/selector'

export default (
    state = TOGGLE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case TOGGLE_STORE: {
            const
                { toggledIsAboutShown } = payload,
                { isAboutShown: prevAboutShown } = state
            return {
                ...state,
                ...payload,
                ...hasKey(toggledIsAboutShown) && {
                    isAboutShown: !prevAboutShown
                }
            }
        }
        case SELECTED_STORE: {
            const {
                isSelectedLogue,
                selectedDotsBit
            } = payload
            return {
                ...state,
                ...hasKey(isSelectedLogue) && isSelectedLogue && {
                    isDotsSlideShown: false,
                    isLyricExpanded: false,
                    isScoreShown: false
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
            const
                { canCarouselNavMount } = payload,
                isLyricExpandable = mapIsLyricExpandable({
                    [VIEWPORT_STORE]: payload
                }),
                canScoreMount = mapCanScoreMount({
                    [VIEWPORT_STORE]: payload
                })
            return {
                ...state,
                ...hasKey(canCarouselNavMount) && !canCarouselNavMount && {
                    isCarouselShown: false,
                    isNavShown: false
                },
                ...hasKey(isLyricExpandable) && !isLyricExpandable && {
                    isLyricExpanded: false
                },
                ...hasKey(canScoreMount) && !canScoreMount && {
                    isScoreShown: false
                }
            }
        }
        default:
            return state
    }
}
