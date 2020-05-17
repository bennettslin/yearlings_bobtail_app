import {
    getSongIsLogue,
    getFinalSong
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getAnnotationIndices = (songIndex) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which annotation array we use is arbitrary.
            getFinalSong(songIndex).annotationDotKeysList.length
        )
)

export const getAnnotationCountForSong = (songIndex) => (
    getAnnotationIndices(songIndex).length
)

export const getIsAnnotationValid = (songIndex, annotationIndex) => {
    const annotationIndicesArray = getAnnotationIndices(songIndex)
    return annotationIndicesArray.some(index => index === annotationIndex - 1)
}

export const getDotKeysForAnnotation = (songIndex, annotationIndex) => {
    const { annotationDotKeysList } = getFinalSong(songIndex)
    return annotationDotKeysList[annotationIndex - 1]
}

export const getTitleForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTitles } = getFinalSong(songIndex)
    return annotationTitles[annotationIndex - 1]
}

export const getTodosForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos } = getFinalSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getWikiWormholesForAnnotation = (songIndex, annotationIndex) => {
    const { annotationWikiWormholes } = getFinalSong(songIndex)
    return annotationWikiWormholes ?
        annotationWikiWormholes[annotationIndex - 1] :
        0
}

export const getVerseIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationVerseIndices } = getFinalSong(songIndex),
        annotationVerseIndex = annotationVerseIndices[annotationIndex - 1]

    // If no verse index for annotation, value is -1.
    return annotationVerseIndex >= 0 ? annotationVerseIndex : null
}

export const getColumnIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationColumnIndices } = getFinalSong(songIndex)

    // Default to left if it's not explicitly right.
    return annotationColumnIndices ?
        annotationColumnIndices[annotationIndex] :
        0
}

export const getCardsForAnnotation = (songIndex, annotationIndex) => {
    const { annotationCardsList } = getFinalSong(songIndex)
    return annotationCardsList[annotationIndex - 1] || null
}

export const getCardCountForAnnotation = (songIndex, annotationIndex) => {
    const cards = getCardsForAnnotation(songIndex, annotationIndex)
    return cards ? cards.length : 0
}

export const getCardForAnnotation = (songIndex, annotationIndex, cardIndex) => {
    const cards = getCardsForAnnotation(songIndex, annotationIndex)
    return cards ? cards[cardIndex] : null
}

export const getWormholeLinksForAnnotationCard = (
    songIndex,
    annotationIndex,
    cardIndex
) => {
    const card = getCardForAnnotation(songIndex, annotationIndex, cardIndex)
    return card ? card.wormholeLinks : null
}
