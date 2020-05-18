import { registerCardsDotKeys } from './register'
import { getFormattedAnnotationTitle } from '../../../../../app/helpers/format'

import {
    LYRIC_LEFT,
    LYRIC_RIGHT,
    COLUMN_INDEX
} from '../../../../../app/constants/lyrics'

export const registerAnnotation = ({
    verse,
    columnKey,
    rootVerseIndex = -1,
    lyricAnnotation,
    textKey,
    annotations

}) => {

    // Annotation will either have an array of cards or just a single card.
    const cards = lyricAnnotation.cards || [lyricAnnotation.card],

        annotationIndex = annotations.length + 1,

        // Create new annotation object to be used for the final build.
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
    }

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(lyricAnnotation)

    if (
        // Let annotation know if it's in a doublespeaker column.
        textKey === LYRIC_LEFT ||

        // Or else let it know if its unit has a side card.
        columnKey === LYRIC_LEFT
    ) {
        annotation[COLUMN_INDEX] = 0

    } else if (
        textKey === LYRIC_RIGHT ||
        columnKey === LYRIC_RIGHT
    ) {
        annotation[COLUMN_INDEX] = 1
    }

    registerCardsDotKeys({
        cards,
        dotKeys
    })

    // Let annotation object know its cards.
    annotation.cards = cards

    // Add dot keys to both lyric annotation and annotation object.
    annotation.dotKeys = dotKeys
    lyricAnnotation.dotKeys = dotKeys

    // Add annotation object to annotations array.
    annotations.push(annotation)

    // Clean up lyric object.
    delete lyricAnnotation.properNoun
    delete lyricAnnotation.annotation
}
