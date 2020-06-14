import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene
} from '../api/album/time'

export const getSongTrackerWidth = ({
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

export const getSceneTrackerWidth = ({
    sceneIndex,
    sceneCursorIndex,
    selectedSongIndex,
    selectedTime

}) => {
    if (sceneIndex !== sceneCursorIndex) {
        return null
    }

    const
        sceneStartTime = getStartTimeForScene(
            selectedSongIndex,
            sceneIndex
        ),
        sceneDuration = getDurationForScene(
            selectedSongIndex,
            sceneIndex
        )

    return (selectedTime - sceneStartTime) / sceneDuration * 100
}
