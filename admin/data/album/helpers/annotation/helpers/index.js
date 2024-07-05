import { getFormattedAnnotationTitle } from './format'
import { registerCardsDotKeys } from './register'
import { getDotsBitFromKeys } from '../../../../../../src/helpers/dot'
import {
    LYRIC_LEFT,
    LYRIC_RIGHT,
} from '../../../../../../src/constants/lyrics'
import { ORDERED_DOT_KEYS } from '../../../../../../src/constants/dots'

export const registerAnnotation = ({
    verse,
    columnKey,
    rootVerseIndex = -1,
    anchoredLyric,
    textKey,
    annotations,

}) => {
    // Annotation will either have an array of cards or just a single card.
    const cards = anchoredLyric.cards || [anchoredLyric.card],

        annotationIndex = annotations.length + 1,

        // Create new annotation object to be used for the final build.
        annotation = {},
        dotKeys = {}

    // Tell verse object its annotation anchors.
    if (!verse.verseAnnotationIndices) {
        verse.verseAnnotationIndices = []
    }

    verse.verseAnnotationIndices.push(annotationIndex)

    // Tell annotation and anchored lyric the index. 1-based index.
    annotation.annotationIndex = annotationIndex
    anchoredLyric.annotationIndex = annotationIndex

    // If in a verse with time, tell annotation its verse index.
    if (rootVerseIndex > -1) {
        annotation.verseIndex = rootVerseIndex

    /**
     * Otherwise, tell it the most recent verse index. For first dot stanza,
     * this is 0.
     */
    }

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(anchoredLyric)

    if (
        // Let annotation know if it's in a doublespeaker column.
        textKey === LYRIC_LEFT ||

        // Or else let it know if its unit has a side card.
        columnKey === LYRIC_LEFT
    ) {
        annotation.columnIndex = 0

    } else if (
        textKey === LYRIC_RIGHT ||
        columnKey === LYRIC_RIGHT
    ) {
        annotation.columnIndex = 1
    }

    registerCardsDotKeys({
        cards,
        dotKeys,
    })

    const cardDotKeyIndices = []
    let place = 0

    // No annotation has more than four cards
    while (place < 4) {
        // eslint-disable-next-line no-loop-func
        cards.forEach((card, index) => {
            if (cardDotKeyIndices.length < index + 1) {
                cardDotKeyIndices.push([])
            }

            const cardDotKeysArray = Object.keys(card.dotKeys)

            if (cardDotKeysArray.length < place + 1) {
                cardDotKeyIndices[index].push(-1)
            } else {
                cardDotKeyIndices[index].push(
                    ORDERED_DOT_KEYS.findIndex(dot => dot === cardDotKeysArray[place]),
                )
            }
        })

        const arrayOfNthPlaceIndices = cardDotKeyIndices.map(
            // eslint-disable-next-line no-loop-func
            dotKeysArray => dotKeysArray[place],
        ).filter(index => index !== -1)

        if (!arrayOfNthPlaceIndices.every((value, index, array) => (
            index === 0 || value === -1 || value >= array[index - 1]
        ))) {
            console.log('caught one', cards, cardDotKeyIndices)
        }

        place++
    }

    // Let annotation object know its cards.
    annotation.cards = cards

    // Add dot keys to annotation.
    annotation.dotKeys = dotKeys

    // Add dot bit number to anchored lyric.
    anchoredLyric.dotsBit = getDotsBitFromKeys(dotKeys)

    // Add annotation object to annotations array.
    annotations.push(annotation)

    // Clean up lyric object.
    delete anchoredLyric.properNoun
    delete anchoredLyric.annotation
    delete anchoredLyric.card
    delete anchoredLyric.cards

    // For admin purposes.
    annotation.todo = anchoredLyric.todo
    delete anchoredLyric.todo
}
