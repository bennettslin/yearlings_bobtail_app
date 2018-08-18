// Actions for state based on window size.
import { is } from './actionsHelper'

import { RESPONSIVE_STORE } from 'constants/state'
import { RESPONSIVE_DEFAULTS } from '../defaultConstants'

export const updateResponsiveStore = ({
    isHeightlessLyricColumn,
    isHiddenCarouselNav,
    isMobileWiki,
    isScoresTipsInMain,
    isTwoRowMenu,
    showOneOfTwoLyricColumns,
    showShrunkNavIcon,
    showSingleBookColumn

} = RESPONSIVE_DEFAULTS) => ({

    type: RESPONSIVE_STORE,
    payload: {
        ...is(isHeightlessLyricColumn) && { isHeightlessLyricColumn },
        ...is(isHiddenCarouselNav) && { isHiddenCarouselNav },
        ...is(isMobileWiki) && { isMobileWiki },
        ...is(isScoresTipsInMain) && { isScoresTipsInMain },
        ...is(isTwoRowMenu) && { isTwoRowMenu },
        ...is(showOneOfTwoLyricColumns) && { showOneOfTwoLyricColumns },
        ...is(showShrunkNavIcon) && { showShrunkNavIcon },
        ...is(showSingleBookColumn) && { showSingleBookColumn }
    }
})
