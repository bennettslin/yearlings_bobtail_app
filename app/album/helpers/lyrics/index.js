import {
    ALBUM_BUILD_KEYS,
    ANCHOR,
    DOT_CARD
} from 'constants/lyrics'

export const registerAdminDotStanzas = (songObject, verseObject) => {

    // For admin purposes.
    if (verseObject[DOT_CARD]) {
        songObject.adminDotStanzasCount++
    }
}

export const recurseToFindAnchors = ({

    inVerseWithTimeIndex = -1,
    albumObject,
    songObject,
    verseObject,
    lyricEntity = verseObject,
    textKey,
    callbackFunction,
    verseTimesCounter

}) => {

    const { time } = lyricEntity

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (!isNaN(time)) {

        // For future recursion.
        verseTimesCounter.counter++

        const {
            mostRecentVerseIndex,
            annotations
        } = songObject

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = mostRecentVerseIndex

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        songObject.mostRecentVerseIndex++
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            recurseToFindAnchors({
                inVerseWithTimeIndex,
                albumObject,
                songObject,
                verseObject,
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
                albumObject,
                songObject,
                verseObject,
                lyricObject: lyricEntity,
                textKey
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childKey => {

                if (lyricEntity[childKey]) {

                    recurseToFindAnchors({
                        inVerseWithTimeIndex,
                        albumObject,
                        songObject,
                        verseObject,
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
