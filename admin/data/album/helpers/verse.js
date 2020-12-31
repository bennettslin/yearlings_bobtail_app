export const addVerseDurations = ({
    songDuration,
    verseStartTimes,
    song,

}) => {
    const verseDurations = []

    verseStartTimes.forEach((verseStartTime, verseIndex) => {
        let nextTime

        // It is followed by another verse.
        if (verseIndex < verseStartTimes.length - 1) {
            nextTime = verseStartTimes[verseIndex + 1]

        // It is the last verse.
        } else {
            nextTime = songDuration
        }

        verseDurations.push(nextTime - verseStartTime)
    })

    song.verseDurations = verseDurations
}

const _addVerseLists = (verses, song) => {
    const
        verseLyrics = [],
        verseLastAnnotationIndices = [],
        verseAnnotationIndicesList = []

    verses.forEach(verse => {
        const {
            lyric,
            lyricCentre,
            lyricLeft,
            lyricRight,
            lastAnnotationIndex,
            verseAnnotationIndices,
        } = verse

        verseLyrics.push({
            ...lyric && { lyric },
            ...lyricCentre && { lyricCentre },
            ...lyricLeft && { lyricLeft },
            ...lyricRight && { lyricRight },
        })
        verseLastAnnotationIndices.push(lastAnnotationIndex)
        verseAnnotationIndicesList.push(verseAnnotationIndices)
    })

    song.verseLyrics = verseLyrics
    song.verseLastAnnotationIndices = verseLastAnnotationIndices
    song.verseAnnotationIndicesList = verseAnnotationIndicesList
}

export const addVerseMetadata = (verses, song) => {
    _addVerseLists(verses, song)
}
