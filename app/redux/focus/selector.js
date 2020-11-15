import { createSelector } from 'reselect'
import { mapIsHeightlessLyric } from '../viewport/selector'
import { FOCUS_STORE } from '../../constants/store'
import { mapIsActivated } from '../activated/selector'
import { mapIsSelectedLogue } from '../selected/selector'
import {
    mapIsAboutShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    mapIsScoreShown
} from '../toggle/selector'
import { mapIsWikiShown } from '../wiki/selector'

export const mapQueuedFocus = (
    { [FOCUS_STORE]: { queuedFocus } }
) => queuedFocus

export const mapCanNavigateByKey = createSelector(
    mapIsSelectedLogue,
    mapIsAboutShown,
    mapIsScoreShown,
    mapIsWikiShown,
    (
        isSelectedLogue,
        isAboutShown,
        isScoreShown,
        isWikiShown
    ) => (
        !isSelectedLogue &&
        !isAboutShown &&
        !isScoreShown &&
        !isWikiShown
    )
)

export const mapShouldNavigateLyric = createSelector(
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isHeightlessLyric,
        isLyricExpanded
    ) => !isHeightlessLyric || isLyricExpanded
)

export const mapShouldNavigateNav = createSelector(
    mapIsActivated,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    (
        isActivated,
        isLyricExpanded,
        isNavExpanded
    ) => (
        !isActivated &&
        !isLyricExpanded &&
        isNavExpanded
    )
)
