import { getAllSelectableVerses } from 'album/api/verses'

const _addIndexToVerseObject = (verse, verseIndexCounter) => {
    verse.verseIndex = verseIndexCounter
}

const _getVerseConfig = (verse) => {
    const { time } = verse
    return { verseStartTime: time }
}

const _addDurationsToVerseConfigs = (verseConfigs, { totalTime }) => {

    verseConfigs.forEach((verseConfig, verseIndex) => {
        const { verseStartTime } = verseConfig
        let nextTime

        // It is followed by another verse.
        if (verseIndex < verseConfigs.length - 1) {
            nextTime = verseConfigs[verseIndex + 1].verseStartTime

        // It is the last verse.
        } else {
            nextTime = totalTime
        }

        verseConfig.verseDuration = nextTime - verseStartTime
    })
}

export const addVerseIndicesAndConfigs = (song) => {

    const
        { lyricUnits } = song,
        verseConfigs = []

    if (lyricUnits) {
        let verseIndexCounter = 0

        lyricUnits.forEach(unit => {
            getAllSelectableVerses(unit).forEach(verse => {

                _addIndexToVerseObject(verse, verseIndexCounter)
                verseIndexCounter++

                verseConfigs.push(_getVerseConfig(verse))
            })
        })
    }

    _addDurationsToVerseConfigs(verseConfigs, song)

    song.songVerseConfigs = verseConfigs
}
