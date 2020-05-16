import { getSong, getFinalSong } from './songs'
import { getVerseIndicesForStanza } from './stanzas'
import { getVerseCountForSong } from './verses'

export const getSongTotalTime = (songIndex) => {
    const { totalTime } = getSong(songIndex)
    return totalTime || Number.MAX_SAFE_INTEGER
}

export const getStartTimeForVerse = (songIndex, verseIndex) => {
    const { verseStartTimes } = getFinalSong(songIndex)
    return verseStartTimes ? verseStartTimes[verseIndex] : 0
}

export const getEndTimeForVerse = (songIndex, verseIndex) => {
    const verseCount = getVerseCountForSong(songIndex)

    /**
     * If it's the last verse, the end time is the song's total time.
     * Otherwise, it's the start time of the next verse.
     */
    return verseIndex < verseCount - 1 ?
        getStartTimeForVerse(songIndex, verseIndex + 1) :
        getSongTotalTime(songIndex)
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
    const { stanzaEndTimes } = getFinalSong(songIndex)
    return stanzaEndTimes[stanzaIndex]
}
