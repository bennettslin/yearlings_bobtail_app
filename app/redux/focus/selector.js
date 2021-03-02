import { createSelector } from 'reselect'
import { mapIsHeightlessLyric } from '../viewport/selector'
import { FOCUS_STORE } from '../../constants/store'
import { mapIsActivated } from '../activated/selector'
import { mapIsSelectedLogue } from '../selected/selector'
import {
    mapIsAboutShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    mapIsPitchShown,
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
    mapIsPitchShown,
    mapIsScoreShown,
    mapIsWikiShown,
    (
        isSelectedLogue,
        isAboutShown,
        isPitchShown,
        isScoreShown,
        isWikiShown,
    ) => getCanNavigateByKey({
        isSelectedLogue,
        isAboutShown,
        isPitchShown,
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
