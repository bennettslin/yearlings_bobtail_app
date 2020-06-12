import { createSelector } from 'reselect'
import { getDurationForSong } from '../../api/album/time'
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
    ) => {
        const
            playedTime = isBannerHovering ? bannerHoverTime : selectedTime,
            songDuration = getDurationForSong(selectedSongIndex)

        return playedTime / songDuration * 100
    }
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
    ) => {
        if (isSliderMoving) {
            return sliderTime
        }

        if (isActivated) {
            return activatedTime
        }

        return selectedTime
    }
)

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth)
)
