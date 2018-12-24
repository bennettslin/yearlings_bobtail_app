import {
    ALBUM_BUILD_KEYS,
    ANCHOR
} from 'constants/lyrics'

export const recurseToFindAnnotations = ({
    rootVerseIndex = -1,
    album,
    song,
    verse,
    lyricEntity = verse,
    textKey,
    annotationCallback

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
                annotationCallback
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            annotationCallback({
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
                        annotationCallback
                    })
                }
            })
        }
    }
}
