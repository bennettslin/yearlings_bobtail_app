import albumLyrics from '../../lyrics'
import { registerAnnotation } from './helpers'
// import { addAnnotationTitles } from './helpers/title'

import {
    ANNOTATION_SEARCH_KEYS,
    ANCHOR,
    LYRIC_LEFT,
    LYRIC_RIGHT
} from '../../../../constants/lyrics'

const _recurseThroughVerse = ({
    verse,
    columnKey,
    rootVerseIndex = -1,
    lyricEntity = verse,
    textKey,
    annotations
}) => {
    const { verseIndex } = lyricEntity

    /**
     * Let subsequent recursions know that we are in a timed verse.
     */
    if (Number.isFinite(verseIndex)) {
        rootVerseIndex = verseIndex

        // Add latest annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            _recurseThroughVerse({
                verse,
                columnKey,
                rootVerseIndex,
                lyricEntity: childEntity,
                textKey,
                annotations
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {

            // Annotation is found, so register it.
            registerAnnotation({
                verse,
                columnKey,
                rootVerseIndex,
                lyricAnnotation: lyricEntity,
                textKey,
                annotations
            })

        } else {
            ANNOTATION_SEARCH_KEYS.forEach(childKey => {
                if (lyricEntity[childKey]) {
                    _recurseThroughVerse({
                        verse,
                        columnKey,
                        rootVerseIndex,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || childKey),
                        annotations
                    })
                }
            })
        }
    }
}

export const addAnnotations = (songIndex, finalSong) => {
    const song = albumLyrics[songIndex],
        { lyricUnits } = song

    const annotations = [],
        annotationDotKeys = [],
        annotationTitles = []

    lyricUnits.forEach(unit => {
        const {
                unitMap,
                mainVerses
            } = unit,

            mainVersesAndUnitMap = [
                ...mainVerses || [],
                unitMap
            ]

        // Go through each indexed verse and then the unit map.
        mainVersesAndUnitMap.forEach(verse => {
            let columnKey

            // If this is a sideCard verse, show in right column.
            if (verse.sideCard) {
                columnKey = LYRIC_RIGHT

            /**
             * Otherwise, if this is an indexed verse in a unit with a
             * sideCard verse, show in left column.
             */
            } else if (unitMap.sideCard) {
                columnKey = LYRIC_LEFT
            }

            _recurseThroughVerse({
                verse,
                columnKey,
                annotations
            })
        })
    })

    annotations.forEach(annotation => {
        annotationDotKeys.push(annotation.dotKeys)
        annotationTitles.push(annotation.title)

        // TODO: Eventually get rid of these, since we won't pass annotation object to begin with.
        delete annotation.title
    })

    finalSong.annotationDotKeys = annotationDotKeys
    finalSong.annotationTitles = annotationTitles
    finalSong.annotations = annotations
}
