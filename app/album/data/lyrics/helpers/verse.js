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

const _addVerseDurations = (verseConfigs, { totalTime }, finalSong) => {
    const verseDurations = []

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

        verseDurations.push(nextTime - verseStartTime)
    })

    finalSong.verseDurations = verseDurations
}

export const addVerseMetadata = (song, indexedVerses, finalSong) => {
    const verseConfigs = _initialiseVerseConfigs(indexedVerses)
    _addVerseDurations(verseConfigs, song, finalSong)
    song.verseConfigs = verseConfigs
    finalSong.verseConfigs = verseConfigs
}
