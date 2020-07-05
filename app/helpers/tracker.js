import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
    getStartTimeForVerse,
    getDurationForVerse
} from '../api/album/time'
import { getSongIsLogue } from '../api/album/songs'

export const getSongTrackerWidth = ({
    isBannerHovering,
    bannerHoverVerseIndex,
    selectedSongIndex,
    cursorTime
}) => {
    const
        playedTime =
            isBannerHovering ?
                getStartTimeForVerse(
                    selectedSongIndex,
                    bannerHoverVerseIndex
                ) :
                cursorTime,
        songDuration = getDurationForSong(selectedSongIndex)

    return playedTime / songDuration * 100
}

export const getSceneTrackerWidth = ({
    sceneIndex,
    sceneCursorIndex,
    selectedSongIndex,
    cursorTime

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

    return (cursorTime - sceneStartTime) / sceneDuration * 100
}

export const getVerseTrackerLength = ({
    verseIndex,
    verseCursorIndex,
    selectedSongIndex,
    cursorTime

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
        )

    return (cursorTime - verseStartTime) / verseDuration * 100
}
