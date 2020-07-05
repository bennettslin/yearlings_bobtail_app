import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
    getStartTimeForVerse,
    getDurationForVerse
} from '../api/album/time'
import { getSongIsLogue } from '../api/album/songs'

export const getSongTrackerWidth = ({
    selectedSongIndex,
    bannerHoverTime,
    cursorTime,
    playerTime,
    isPlaying

}) => {
    const songDuration = getDurationForSong(selectedSongIndex)

    let trackerTime = cursorTime

    if (bannerHoverTime > -1) {
        trackerTime = bannerHoverTime

    } else if (isPlaying) {
        trackerTime = playerTime
    }

    return trackerTime / songDuration * 100
}

export const getSceneTrackerWidth = ({
    sceneIndex,
    sceneCursorIndex,
    selectedSongIndex,
    cursorTime,
    playerTime,
    isPlaying

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
        ),
        trackerTime = isPlaying ? playerTime : cursorTime

    return (trackerTime - sceneStartTime) / sceneDuration * 100
}

export const getVerseTrackerLength = ({
    verseIndex,
    verseCursorIndex,
    selectedSongIndex,
    cursorTime,
    playerTime,
    isPlaying

}) => {
    if (
        verseIndex !== verseCursorIndex ||
        getSongIsLogue(selectedSongIndex)
    ) {
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
        ),
        trackerTime = isPlaying ? playerTime : cursorTime

    return (trackerTime - verseStartTime) / verseDuration * 100
}
