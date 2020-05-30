import { getSong } from './songs'
import { getDotKeysFromBitNumber } from '../../helpers/dot'
import { getArrayOfLength } from '../../helpers/general'
import { WORMHOLE } from '../../constants/dots'

export const getCardsForAnnotation = (songIndex, annotationIndex) => {
    const { annotationCardsList } = getSong(songIndex),
        cards = annotationCardsList[annotationIndex - 1]

    if (!cards) {
        return null
    }

    // If single card object, return wrapped in an array.
    return Array.isArray(cards) ? cards : [cards]
}

export const getAnnotationCardIndices = (songIndex, annotationIndex) => {
    const { annotationCardsDescriptionsList } = getSong(songIndex)
    return getArrayOfLength(
        // Which card array we use is arbitrary.
        annotationCardsDescriptionsList[annotationIndex - 1].length
    )
}

export const getDescriptionForAnnotationCard = (
    songIndex, annotationIndex, cardIndex
) => {
    const { annotationCardsDescriptionsList } = getSong(songIndex),
        descriptions = annotationCardsDescriptionsList[annotationIndex - 1]
    return descriptions[cardIndex]
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
    const dotKeysBitNumber = Array.isArray(dotKeysEntity) ?
        dotKeysEntity[cardIndex] :
        dotKeysEntity

    return getDotKeysFromBitNumber(dotKeysBitNumber)
}

const getCardForAnnotation = (songIndex, annotationIndex, cardIndex) => {
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
