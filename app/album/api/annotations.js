import {
    getSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'
import { WORMHOLE } from '../../constants/dots'

export const getAnnotationIndices = songIndex => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which annotation array we use is arbitrary.
            getSong(songIndex).annotationDotKeysList.length
        )
)

export const getAnnotationCountForSong = songIndex => (
    getAnnotationIndices(songIndex).length
)

export const getIsAnnotationValid = (songIndex, annotationIndex) => {
    const annotationIndicesArray = getAnnotationIndices(songIndex)
    return annotationIndicesArray.some(index => index === annotationIndex - 1)
}

export const getValidAnnotationIndex = (songIndex, annotationIndex) => (
    getIsAnnotationValid(songIndex, annotationIndex) ? annotationIndex : 0
)

export const getDotKeysForAnnotation = (songIndex, annotationIndex) => {
    const { annotationDotKeysList } = getSong(songIndex)
    return annotationDotKeysList[annotationIndex - 1]
}

export const getTitleForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTitles } = getSong(songIndex)
    return annotationTitles[annotationIndex - 1]
}

export const getTodosForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getWikiWormholesForAnnotation = (songIndex, annotationIndex) => {
    const { annotationWikiWormholes } = getSong(songIndex)
    return annotationWikiWormholes ?
        annotationWikiWormholes[annotationIndex - 1] :
        0
}

export const getVerseIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationVerseIndices } = getSong(songIndex),
        annotationVerseIndex = annotationVerseIndices[annotationIndex - 1]

    // If no verse index for annotation, value is -1.
    return annotationVerseIndex >= 0 ? annotationVerseIndex : null
}

export const getColumnIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationColumnIndices } = getSong(songIndex)

    if (!annotationColumnIndices) {
        return null
    }

    const columnIndex = annotationColumnIndices[annotationIndex - 1]
    return columnIndex >= 0 ? columnIndex : null
}

export const getCardsForAnnotation = (songIndex, annotationIndex) => {
    const { annotationCardsList } = getSong(songIndex),
        cards = annotationCardsList[annotationIndex - 1]

    if (!cards) {
        return null
    }

    // If single card object, return wrapped in an array.
    return Array.isArray(cards) ? cards : [cards]
}

export const getCardCountForAnnotation = (songIndex, annotationIndex) => {
    const cards = getCardsForAnnotation(songIndex, annotationIndex)
    return cards ? cards.length : 0
}

export const getCardForAnnotation = (songIndex, annotationIndex, cardIndex) => {
    const cards = getCardsForAnnotation(songIndex, annotationIndex)
    return cards ? cards[cardIndex] : null
}

export const getDescriptionForAnnotationCard = (
    songIndex, annotationIndex, cardIndex
) => {
    const { annotationCardsDescriptionsList } = getSong(songIndex),
        descriptions = annotationCardsDescriptionsList[annotationIndex - 1]
    return descriptions ? descriptions[cardIndex] : null
}

export const getDotKeysForAnnotationCard = (
    songIndex, annotationIndex, cardIndex
) => {
    // Return just wormhole key if it's a wormholes card.
    if (!getDescriptionForAnnotationCard(
        songIndex, annotationIndex, cardIndex
    )) {
        return { [WORMHOLE]: true }
    }

    const { annotationCardsDotKeysList } = getSong(songIndex),
        dotKeysEntity = annotationCardsDotKeysList[annotationIndex - 1]

    if (!dotKeysEntity) {
        return null
    }
    return Array.isArray(dotKeysEntity) ?
        dotKeysEntity[cardIndex] :
        dotKeysEntity
}

export const getWormholeLinksForAnnotationCard = (
    songIndex,
    annotationIndex,
    cardIndex
) => {
    const card = getCardForAnnotation(songIndex, annotationIndex, cardIndex)
    return card ? card.wormholeLinks : null
}
