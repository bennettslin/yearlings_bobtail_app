import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
    getStartTimeForVerse,
    getDurationForVerse
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

export const getVerseTrackerLength = ({
    verseIndex,
    verseCursorIndex,
    selectedSongIndex,
    selectedTime

}) => {
    if (verseIndex !== verseCursorIndex) {
        return null
    }

    const
        verseStartTime = getStartTimeForVerse(
            selectedSongIndex,
            verseIndex
        ),
        verseDuration = getDurationForVerse(
            selectedSongIndex,
            verseIndex
        )

    return (selectedTime - verseStartTime) / verseDuration * 100
}
