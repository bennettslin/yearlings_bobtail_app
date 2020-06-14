import { getDurationForSong } from '../api/album/time'

export const getBannerCursorWidth = ({
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

export const getBannerCursorTime = ({
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
