import albumLyrics from '../../lyrics'
import { registerAnnotation } from './helpers'

import {
    ANNOTATION_SEARCH_KEYS,
    ANCHOR,
    LYRIC_LEFT,
    LYRIC_RIGHT
} from '../../../../app/constants/lyrics'

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

export const addAnnotationMetadata = (songIndex, song) => {
    const { lyricUnits } = albumLyrics[songIndex],
        annotations = []

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

    const
        annotationColumnIndices = [],
        annotationDotKeysList = [],
        annotationTitles = [],
        annotationVerseIndices = [],
        annotationCardsList = []

    /**
     * Now that we have recursively gone through the lyrics and the annotation
     * data has been populated, we will now spread them out into arrays for
     * the final build. This is necessary because we don't know the final
     * annotation count and some values are empty, so we need to be able to
     * push default values to keep the array lengths equal.
     */
    annotations.forEach(annotation => {
        annotationColumnIndices.push(
            Number.isFinite(annotation.columnIndex) ?
                annotation.columnIndex :
                -1
        )
        annotationDotKeysList.push(annotation.dotKeys)
        annotationTitles.push(annotation.title)
        annotationVerseIndices.push(
            Number.isFinite(annotation.verseIndex) ?
                annotation.verseIndex :
                -1
        )
        annotationCardsList.push(annotation.cards)
    })

    // Don't bother to add if it's all left column.
    if (annotationColumnIndices.some(index => index === 1)) {
        song.annotationColumnIndices = annotationColumnIndices
    }
    song.annotationDotKeysList = annotationDotKeysList
    song.annotationTitles = annotationTitles
    song.annotationVerseIndices = annotationVerseIndices
    song.annotationCardsList = annotationCardsList
    return annotations
}