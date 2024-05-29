// Reducers for toggle buttons and options.
import { hasKey } from '../../helpers/action'
import { mapIsLyricExpandable } from '../lyricExpand/selector'
import { mapCanScoreMount } from '../viewport/selector'
import { getToggleDefaults } from './default'
import {
    TOGGLE_STORE,
    SELECTED_STORE,
    VIEWPORT_STORE,
} from '../../constants/store'

export const getToggleReducer = ({ isPromoPage = false } = {}) => (
    state = getToggleDefaults(isPromoPage),
    { type, payload },
) => {
    switch (type) {
        case TOGGLE_STORE: {
            const
                {
                    toggledIsAboutShown,
                    toggledIsAudioOptionsExpanded,
                    toggledIsPromoShown,
                    ...remainingPayload
                } = payload,
                {
                    isAboutShown: prevAboutShown,
                    isAudioOptionsExpanded: prevIsAudioOptionsExpanded,
                    isPromoShown: prevIsPromoShown,
                } = state
            return {
                ...state,
                ...remainingPayload,
                ...hasKey(toggledIsAboutShown) && {
                    isAboutShown: !prevAboutShown,
                },
                ...hasKey(toggledIsAudioOptionsExpanded) && {
                    isAudioOptionsExpanded: !prevIsAudioOptionsExpanded,
                },
                ...hasKey(toggledIsPromoShown) && {
                    isPromoShown: !prevIsPromoShown,
                },
            }
        }
        case SELECTED_STORE: {
            const {
                isSelectedLogue,
                selectedDotsBit,
            } = payload
            return {
                ...state,
                ...hasKey(isSelectedLogue) && isSelectedLogue && {
                    isDotsSlideShown: false,
                    isLyricExpanded: false,
                    isScoreShown: false,
                },
                /**
                 * If there are no selected dots, there are no carousel
                 * annotations to show. (May not be needed, because dots can
                 * only be deselected when carousel is not shown?)
                 */
                ...hasKey(selectedDotsBit) && !selectedDotsBit && {
                    isCarouselExpanded: false,
                },
            }
        }
        case VIEWPORT_STORE: {
            const
                { canCarouselNavMount } = payload,
                isLyricExpandable = mapIsLyricExpandable({
                    [VIEWPORT_STORE]: payload,
                }),
                canScoreMount = mapCanScoreMount({
                    [VIEWPORT_STORE]: payload,
                })
            return {
                ...state,
                ...hasKey(canCarouselNavMount) && !canCarouselNavMount && {
                    isCarouselExpanded: false,
                    isNavExpanded: false,
                },
                ...hasKey(isLyricExpandable) && !isLyricExpandable && {
                    isLyricExpanded: false,
                },
                ...hasKey(canScoreMount) && !canScoreMount && {
                    isScoreShown: false,
                },
            }
        }
        default:
            return state
    }
}
