import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
    getStartTimeForVerse,
    getDurationForVerse,
} from '../endpoint/album/time'
import { getSongIsLogue } from '../endpoint/album/songs'

export const getSongTrackerWidth = ({
    selectedSongIndex,
    bannerHoverTime,
    cursorTime,
    audioTime,
    isPlaying,

}) => {
    const songDuration = getDurationForSong(selectedSongIndex)

    let trackerTime = cursorTime

    if (bannerHoverTime > -1) {
        trackerTime = bannerHoverTime

    } else if (isPlaying) {
        trackerTime = audioTime
    }

    return trackerTime / songDuration * 100
}

export const getSceneTrackerWidth = ({
    sceneIndex,
    sceneCursorIndex,
    selectedSongIndex,
    cursorTime,
    audioTime,
    isPlaying,

}) => {
    if (sceneIndex !== sceneCursorIndex) {
        return null
    }

    const
        sceneStartTime = getStartTimeForScene(
            selectedSongIndex,
            sceneIndex,
        ),
        sceneDuration = getDurationForScene(
            selectedSongIndex,
            sceneIndex,
        ),
        trackerTime = isPlaying ? audioTime : cursorTime

    return (trackerTime - sceneStartTime) / sceneDuration * 100
}

export const getVerseTrackerLength = ({
    verseIndex,
    verseCursorIndex,
    selectedSongIndex,
    cursorTime,
    audioTime,
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
            verseIndex,
        ),
        verseDuration = getDurationForVerse(
            selectedSongIndex,
            verseIndex,
        ),
        trackerTime = isPlaying ? audioTime : cursorTime

    return (trackerTime - verseStartTime) / verseDuration * 100
}
