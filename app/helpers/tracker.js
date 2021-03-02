import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
    getStartTimeForVerse,
    getDurationForVerse,
} from '../api/album/time'
import { getSongIsLogue } from '../api/album/songs'

export const getSongTrackerWidth = ({
    selectedSongIndex,
    bannerHoverTime,
    cursorTime,
    selectedPlayerTime,
    isPlaying,

}) => {
    const songDuration = getDurationForSong(selectedSongIndex)

    let trackerTime = cursorTime

    if (bannerHoverTime > -1) {
        trackerTime = bannerHoverTime

    } else if (isPlaying) {
        trackerTime = selectedPlayerTime
    }

    return trackerTime / songDuration * 100
}

export const getSceneTrackerWidth = ({
    sceneIndex,
    sceneCursorIndex,
    selectedSongIndex,
    cursorTime,
    selectedPlayerTime,
    isPlaying,

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
        trackerTime = isPlaying ? selectedPlayerTime : cursorTime

    return (trackerTime - sceneStartTime) / sceneDuration * 100
}

export const getVerseTrackerLength = ({
    verseIndex,
    verseCursorIndex,
    selectedSongIndex,
    cursorTime,
    selectedPlayerTime,
    isPlaying,

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
        trackerTime = isPlaying ? selectedPlayerTime : cursorTime

    return (trackerTime - verseStartTime) / verseDuration * 100
}
