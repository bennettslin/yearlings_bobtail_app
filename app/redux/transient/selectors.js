import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import { getIsShelfLeftShown } from '../../helpers/main'
import { mapIsActivated } from '../activated/selectors'
import { mapIsPhoneWidth } from '../device/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import {
    mapLyricSongIndex,
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../lyric/selectors'
import { mapIsLogueOverviewShown } from '../option/selectors'
import { mapIsOverlayShown } from '../overlay/selectors'
import { mapIsOverviewShown } from '../overview/selectors'
import { mapIsTipsShown } from '../tips/selectors'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selectors'
import { mapDeviceWidthIndex } from '../viewport/selectors'

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

export const mapIsShelfLeftShown = createSelector(
    mapIsPhoneWidth,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsOverlayShown,
    mapCanLyricCarouselEnter,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    mapIsLogueOverviewShown,
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
        isLogueOverviewShown,
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
        isLogueOverviewShown,
        isOverviewShown,
        isTipsShown
    })
)
