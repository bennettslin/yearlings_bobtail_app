import { getDurationForSong } from '../api/album/time'

export const getCursorIndex = (
    sliderIndex,
    activatedIndex,
    defaultIndex
) => {
    if (sliderIndex >= 0) {
        return sliderIndex
    } else if (activatedIndex >= 0) {
        return activatedIndex
    } else {
        return defaultIndex
    }
}

export const getSongCursorWidth = ({
    isBannerHovering,
    bannerHoverTime,
    selectedTime,
    selectedSongIndex
}) => {
    const
        playedTime = isBannerHovering ? bannerHoverTime : selectedTime,
        songDuration = getDurationForSong(selectedSongIndex)

    return playedTime / songDuration * 100
}

export const getCursorWidth = ({
    selectedTime,
    isActivated,
    activatedTime,
    isSliderMoving,
    sliderTime

}) => {
    if (isSliderMoving) {
        return sliderTime
    }

    if (isActivated) {
        return activatedTime
    }

    return selectedTime
}
