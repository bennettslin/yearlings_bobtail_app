import { getSong, getFinalSong } from './songs'
import { getStanzaVerseIndices } from './stanzas'
import { getSongVerseConfigs } from './verses'

export const getSongTotalTime = (songIndex) => {
    const { totalTime } = getSong(songIndex)
    return totalTime || Number.MAX_SAFE_INTEGER
}

export const getStartTimeForVerse = (songIndex, verseIndex) => {
    const { verseStartTimes } = getFinalSong(songIndex)
    return verseStartTimes[verseIndex]
}

export const getEndTimeForVerseIndex = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)

    if (verseConfigs.length) {
        /**
         * If it's the last verse, the end time is the song's total time.
         * Otherwise, it's the start time of the next verse.
         */
        return verseIndex < verseConfigs.length - 1 ?
            getStartTimeForVerse(songIndex, verseIndex + 1) :
            getSongTotalTime(songIndex)

    } else {
        return 0
    }
}

export const getStartTimeForStanza = (songIndex, stanzaIndex) => (
    getStartTimeForVerse(
        songIndex,
        getStanzaVerseIndices(
            songIndex,
            stanzaIndex
        )[0]
    )
)
