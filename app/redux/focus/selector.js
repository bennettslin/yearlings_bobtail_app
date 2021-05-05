import { createSelector } from 'reselect'
import { mapIsHeightlessLyric } from '../viewport/selector'
import { FOCUS_STORE } from '../../constants/store'
import { mapIsActivated } from '../activated/selector'
import { mapIsSelectedLogue } from '../selected/selector'
import {
    mapIsAboutShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    mapIsMarketingShown,
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
    mapIsMarketingShown,
    mapIsScoreShown,
    mapIsWikiShown,
    (
        isSelectedLogue,
        isAboutShown,
        isMarketingShown,
        isScoreShown,
        isWikiShown,
    ) => getCanNavigateByKey({
        isSelectedLogue,
        isAboutShown,
        isMarketingShown,
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
