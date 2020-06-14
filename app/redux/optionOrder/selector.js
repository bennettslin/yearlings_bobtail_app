import { createSelector } from 'reselect'
import {
    getToggleShowsOverviewImmediately,
    getToggleShowsTipsImmediately
} from '../../helpers/options'
import { mapIsActivated } from '../activated/selector'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selector'

export const mapToggleShowsOverviewImmediately = createSelector(
    mapIsTipsShown,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsOverlayShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsOverviewImmediately({
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)

export const mapToggleShowsTipsImmediately = createSelector(
    mapIsOverviewShown,
    mapIsTipsShown,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsOverlayShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isOverviewShown,
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsTipsImmediately({
        isOverviewShown,
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)
