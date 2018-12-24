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
    rootVerseIndex = -1,
    album,
    song,
    verse,
    lyricEntity = verse,
    textKey,
    callbackFunction

}) => {

    const { verseIndex } = lyricEntity

    /**
     * Let subsequent recursions know that we are in a timed verse.
     */
    if (!isNaN(verseIndex)) {
        const { annotations } = song

        rootVerseIndex = verseIndex

        // Add latest annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        song.mostRecentVerseIndex = verseIndex
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            recurseToFindAnnotations({
                rootVerseIndex,
                album,
                song,
                verse,
                lyricEntity: childEntity,
                textKey,
                callbackFunction
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            callbackFunction({
                rootVerseIndex,
                album,
                song,
                verse,
                lyricAnnotation: lyricEntity,
                textKey
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childKey => {
                if (lyricEntity[childKey]) {
                    recurseToFindAnnotations({
                        rootVerseIndex,
                        album,
                        song,
                        verse,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || childKey),
                        callbackFunction
                    })
                }
            })
        }
    }
}
