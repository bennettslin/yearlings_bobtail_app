import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import {
    getIsShelfLeftShown,
    getIsCarouselNavShowable
} from '../../helpers/main'
import { mapIsActivated } from '../activated/selector'
import { mapIsPhoneWidth } from '../device/selector'
import { mapCanLyricCarouselEnter } from '../entrance/selector'
import {
    mapLyricSongIndex,
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selector'
import { mapDeviceWidthIndex } from '../viewport/selector'

export const mapIsEarShown = createSelector(
    mapLyricSongIndex,
    mapDeviceWidthIndex,
    (
        lyricSongIndex,
        deviceWidthIndex
    ) => getIsDoublespeakerShown({
        songIndex: lyricSongIndex,
        deviceWidthIndex
    })
)

export const mapIsCarouselNavShowable = createSelector(
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricLogue,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselNavShowable({
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    })
)

export const mapIsShelfLeftShown = createSelector(
    mapIsPhoneWidth,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsOverlayShown,
    mapCanLyricCarouselEnter,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    mapIsOverviewShown,
    mapIsTipsShown,
    (
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown
    ) => getIsShelfLeftShown({
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown
    })
)
