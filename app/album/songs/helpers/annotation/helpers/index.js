// TODO: Refactor this. Separate into smaller files

import {
    registerCardsDotKeys,
    registerCardsWormholes
} from './register'

import { getFormattedAnnotationTitle } from 'helpers/format'

import {
    LEFT,
    RIGHT,
    COLUMN_INDEX
} from 'constants/lyrics'

export const registerAnnotation = ({
    song,
    verse,
    columnKey,
    rootVerseIndex = -1,
    lyricAnnotation,
    textKey

}) => {
    const
        /**
         * Annotation will either have an array of cards or just a single card.
         */
        cards =
            lyricAnnotation.cards ||
            [lyricAnnotation.card],

        annotationIndex = song.annotations.length + 1,

        // Create new annotation object to be known by song.
        annotation = { todo: lyricAnnotation.todo },
        dotKeys = {}

    // Tell verse object its annotation anchors.
    if (!verse.verseAnnotationIndices) {
        verse.verseAnnotationIndices = []
    }

    verse.verseAnnotationIndices.push(annotationIndex)

    // Tell annotation and anchored lyric the index. 1-based index.
    annotation.annotationIndex = annotationIndex
    lyricAnnotation.annotationIndex = annotationIndex

    // If in a verse with time, tell annotation its verse index.
    if (rootVerseIndex > -1) {
        annotation.verseIndex = rootVerseIndex

    /**
     * Otherwise, tell it the most recent verse index. For first dot stanza,
     * this is 0.
     */
    } else {
        annotation.mostRecentVerseIndex = song.mostRecentVerseIndex
    }

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(lyricAnnotation)

    if (
        // Let annotation know if it's in a doublespeaker column.
        textKey === LEFT ||

        // Or else let it know if its unit has a side card.
        columnKey === LEFT
    ) {
        annotation[COLUMN_INDEX] = 0

    } else if (
        textKey === RIGHT ||
        columnKey === RIGHT
    ) {
        annotation[COLUMN_INDEX] = 1
    }

    registerCardsDotKeys({
        cards,
        dotKeys
    })

    registerCardsWormholes({
        verse,
        cards
    })

    // Let annotation object know its cards.
    annotation.cards = cards

    // Add dot keys to both lyric annotation and annotation object.
    annotation.dotKeys = dotKeys
    lyricAnnotation.dotKeys = dotKeys

    // Add annotation object to annotations array.
    song.annotations.push(annotation)

    // Clean up lyric object.
    delete lyricAnnotation.properNoun
    delete lyricAnnotation.annotation
}
