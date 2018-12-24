import {
    ALBUM_BUILD_KEYS,
    ANCHOR,
    DOT_CARD
} from 'constants/lyrics'

export const registerAdminDotStanzas = (song, verse) => {

    // For admin purposes.
    if (verse[DOT_CARD]) {
        song.adminDotStanzasCount++
    }
}

export const recurseToFindAnnotations = ({

    inVerseWithTimeIndex = -1,
    album,
    song,
    verse,
    lyricEntity = verse,
    textKey,
    callbackFunction,
    verseTimesCounter

}) => {

    const { verseIndex } = lyricEntity

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (!isNaN(verseIndex)) {

        // For future recursion.
        verseTimesCounter.counter++

        const {
            annotations
        } = song

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = verseIndex

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        song.mostRecentVerseIndex = verseIndex
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            recurseToFindAnnotations({
                inVerseWithTimeIndex,
                album,
                song,
                verse,
                lyricEntity: childEntity,
                textKey,
                callbackFunction,
                verseTimesCounter
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {

            callbackFunction({
                inVerseWithTimeIndex,
                album,
                song,
                verse,
                rawAnnotation: lyricEntity,
                textKey
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childKey => {

                if (lyricEntity[childKey]) {

                    recurseToFindAnnotations({
                        inVerseWithTimeIndex,
                        album,
                        song,
                        verse,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || childKey),
                        callbackFunction,
                        verseTimesCounter
                    })
                }
            })
        }
    }
}
