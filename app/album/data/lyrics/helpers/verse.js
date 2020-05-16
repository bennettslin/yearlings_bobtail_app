const _initialiseVerseConfigs = (indexedVerses) => {

    const verseConfigs = []

    indexedVerses.forEach(verse => {
        const { time } = verse

        verseConfigs.push({
            verseStartTime: time
        })
    })

    return verseConfigs
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

export const addVerseConfigs = (song, indexedVerses, finalSong) => {
    const verseConfigs = _initialiseVerseConfigs(indexedVerses)
    _addDurationsToVerseConfigs(verseConfigs, song)
    song.verseConfigs = verseConfigs
    finalSong.verseConfigs = verseConfigs
}
