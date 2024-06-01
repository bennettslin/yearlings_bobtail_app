import { createSelector } from 'reselect'
import { mapIsHeightlessLyric } from '../viewport/selector'
import { FOCUS_STORE } from '../../constants/store'
import { mapIsActivated } from '../activated/selector'
import { mapIsSelectedLogue } from '../selected/selector'
import {
    mapIsAboutShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    mapIsPromoShown,
    mapIsScoreShown,
} from '../toggle/selector'
import { mapIsWikiShown } from '../wiki/selector'
import { getCanNavigateByKey } from '../../helpers/key'

export const mapQueuedFocus = (
    { [FOCUS_STORE]: { queuedFocus } },
) => queuedFocus

export const mapCanNavigateByKey = createSelector(
    mapIsSelectedLogue,
    mapIsAboutShown,
    mapIsNavExpanded,
    mapIsPromoShown,
    mapIsScoreShown,
    mapIsWikiShown,
    (
        isSelectedLogue,
        isAboutShown,
        isNavExpanded,
        isPromoShown,
        isScoreShown,
        isWikiShown,
    ) => getCanNavigateByKey({
        isSelectedLogue,
        isAboutShown,
        isNavExpanded,
        isPromoShown,
        isScoreShown,
        isWikiShown,
    }),
)

export const mapShouldNavigateLyric = createSelector(
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isHeightlessLyric,
        isLyricExpanded,
    ) => !isHeightlessLyric || isLyricExpanded,
)

export const mapShouldNavigateNav = createSelector(
    mapIsActivated,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    (
        isActivated,
        isLyricExpanded,
        isNavExpanded,
    ) => (
        !isActivated &&
        !isLyricExpanded &&
        isNavExpanded
    ),
)
