import { createSelector } from 'reselect'
import {
    getBannerCursorWidth,
    getBannerCursorTime
} from '../../helpers/banner'
import { getIsSmallBannerText } from '../../helpers/resize/responsive'
import {
    mapIsActivated,
    mapActivatedTime
} from '../activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from '../selected/selectors'
import {
    mapIsSliderMoving,
    mapSliderTime
} from '../slider/selectors'
import { mapWindowWidth } from '../viewport/selectors'
import { BANNER_STORE } from '../../constants/store'

export const mapIsBannerHovering = (
    { [BANNER_STORE]: { isBannerHovering } }
) => isBannerHovering

export const mapBannerHoverVerseIndex = (
    { [BANNER_STORE]: { bannerHoverVerseIndex } }
) => bannerHoverVerseIndex

export const mapBannerHoverTime = (
    { [BANNER_STORE]: { bannerHoverTime } }
) => bannerHoverTime

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth)
)

export const mapSongBannerCursorWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverTime,
    mapSelectedTime,
    mapSelectedSongIndex,
    (
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    ) => getBannerCursorWidth({
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    })
)

export const mapCursorTime = createSelector(
    mapSelectedTime,
    mapIsActivated,
    mapActivatedTime,
    mapIsSliderMoving,
    mapSliderTime,
    (
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    ) => getBannerCursorTime({
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    })
)
