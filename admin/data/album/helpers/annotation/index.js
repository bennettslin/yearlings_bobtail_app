import albumLyrics from '../../lyrics'
import { registerAnnotation } from './helpers'
import { getDotsBitFromKeys } from '../../../../../src/helpers/dot'

import {
    ANNOTATION_SEARCH_KEYS,
    ANCHOR,
    LYRIC_LEFT,
    LYRIC_RIGHT,
} from '../../../../../src/constants/lyrics'

const _recurseThroughVerse = ({
    verse,
    columnKey,
    rootVerseIndex = -1,
    lyricEntity = verse,
    textKey,
    annotations,
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
                annotations,
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            const anchoredLyric = lyricEntity

            // Annotation is found, so register it.
            registerAnnotation({
                verse,
                columnKey,
                rootVerseIndex,
                anchoredLyric,
                textKey,
                annotations,
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
                        annotations,
                    })
                }
            })
        }
    }
}

const _addAnnotationLists = (annotations, song) => {
    const
        annotationTitles = [],
        annotationColumnIndices = [],
        annotationVerseIndices = [],
        annotationDotsBits = [],
        annotationCardsDescriptionsList = [],
        annotationCardsDotsBitsList = [],
        annotationTodos = []

    /**
     * Now that we have recursively gone through the lyrics and the annotation
     * data has been populated, we will now spread them out into arrays for
     * the final build. This is necessary because we don't know the final
     * annotation count and some values are empty, so we need to be able to
     * push default values to keep the array lengths equal.
     */
    annotations.forEach(annotation => {
        annotationTitles.push(annotation.title)
        annotationColumnIndices.push(
            Number.isFinite(annotation.columnIndex) ?
                annotation.columnIndex :
                -1,
        )
        annotationVerseIndices.push(
            Number.isFinite(annotation.verseIndex) ?
                annotation.verseIndex :
                -1,
        )
        annotationDotsBits.push(getDotsBitFromKeys(annotation.dotKeys))
        annotationCardsDescriptionsList.push(
            annotation.cards.map((card = {}) => card.description || null),
        )
        annotationCardsDotsBitsList.push(
            // If single card, push individual dot keys for dev clarity.
            annotation.cards.length === 1 && annotation.cards[0] ?
                getDotsBitFromKeys(
                    annotation.cards[0].dotKeys,
                ) || null :
                annotation.cards.map((card = {}) => getDotsBitFromKeys(
                    card.dotKeys,
                ) || null),
        )

        // For admin purposes.
        annotationTodos.push(annotation.todo)
    })

    // Don't bother to add if it's all left column.
    if (annotationColumnIndices.some(index => index === 1)) {
        song.annotationColumnIndices = annotationColumnIndices
    }
    song.annotationTitles = annotationTitles
    song.annotationDotsBits = annotationDotsBits
    song.annotationVerseIndices = annotationVerseIndices
    song.annotationCardsDescriptionsList = annotationCardsDescriptionsList
    song.annotationCardsDotsBitsList = annotationCardsDotsBitsList
    song.annotationTodos = annotationTodos
}

export const addAnnotationMetadata = (songIndex, song) => {
    const { lyricUnits } = albumLyrics[songIndex],
        annotations = []

    lyricUnits.forEach(unit => {
        const {
                unitMap: {
                    sideCardType,
                },
                mainVerses,
                subVerse,
                sideCard,
                sideSubCard,
                unitDot,
            } = unit,

            allVerses = [
                ...mainVerses || [],
                {
                    subVerse,
                    sideCard,
                    sideSubCard,
                },
                { unitDot },
            ]

        // Go through each indexed verse and then the unit map.
        allVerses.forEach(verse => {
            let columnKey

            /**
             * If it's the unit dot, it will show in both columns, even if it's
             * in a unit with side cards.
             */
            if (!verse.unitDot) {

                // If this is a sideCard verse, show in right column.
                if (verse.sideCard) {
                    columnKey = LYRIC_RIGHT

                /**
                 * Otherwise, if this is an indexed verse in a unit with a
                 * sideCard verse, show in left column.
                 */
                } else if (sideCardType) {
                    columnKey = LYRIC_LEFT
                }
            }

            _recurseThroughVerse({
                verse,
                columnKey,
                annotations,
            })
        })
    })

    _addAnnotationLists(annotations, song)

    return annotations
}
