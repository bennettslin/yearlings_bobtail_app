import { getSong } from './songs'
import { getVerseIndicesForStanza } from './stanzas'
import { getVerseCountForSong } from './verses'

export const getDurationForSong = songIndex => {
    const { songDuration } = getSong(songIndex)
    return songDuration || Number.MAX_SAFE_INTEGER
}

export const getStartTimeForVerse = (songIndex, verseIndex) => {
    const { verseStartTimes = [] } = getSong(songIndex)
    return verseStartTimes[verseIndex] || 0
}

export const getEndTimeForVerse = (songIndex, verseIndex) => {
    const verseCount = getVerseCountForSong(songIndex)

    /**
     * If it's the last verse, the end time is the song's total time.
     * Otherwise, it's the start time of the next verse.
     */
    return verseIndex < verseCount - 1 ?
        getStartTimeForVerse(songIndex, verseIndex + 1) :
        getDurationForSong(songIndex)
}

export const getDurationForVerse = (songIndex, verseIndex) => {
    const { verseDurations } = getSong(songIndex)
    return verseDurations[verseIndex]
}

export const getStartTimeForStanza = (songIndex, stanzaIndex) => (
    getStartTimeForVerse(
        songIndex,
        getVerseIndicesForStanza(
            songIndex,
            stanzaIndex
        )[0]
    )
)

export const getEndTimeForStanza = (songIndex, stanzaIndex) => {
    const { stanzaEndTimes } = getSong(songIndex)
    return stanzaEndTimes[stanzaIndex]
}

export const getStartTimeForScene = (songIndex, sceneIndex) => {
    const { sceneStartTimes } = getSong(songIndex)
    return sceneStartTimes[sceneIndex]
}

export const getDurationForScene = (songIndex, sceneIndex) => {
    const { sceneDurations } = getSong(songIndex)
    return sceneDurations[sceneIndex]
}
