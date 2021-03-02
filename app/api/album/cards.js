import { getSong } from './songs'
import { getDotKeysFromBit } from '../../helpers/dot'
import { getArrayOfLength } from '../../helpers/general'
import { WORMHOLE_BIT } from '../../constants/dots'

export const getAnnotationCardIndices = (songIndex, annotationIndex) => {
    const { annotationCardsDescriptionsList } = getSong(songIndex)
    return getArrayOfLength(
        // Which card array we use is arbitrary.
        annotationCardsDescriptionsList[annotationIndex - 1].length,
    )
}

export const getDescriptionForAnnotationCard = (
    songIndex, annotationIndex, cardIndex,
) => {
    const { annotationCardsDescriptionsList } = getSong(songIndex),
        descriptions = annotationCardsDescriptionsList[annotationIndex - 1]
    return descriptions[cardIndex]
}

export const getDotsBitForAnnotationCard = (
    songIndex, annotationIndex, cardIndex,
) => {
    // Return just wormhole key if it's a wormholes card.
    if (!getDescriptionForAnnotationCard(
        songIndex, annotationIndex, cardIndex,
    )) {
        return WORMHOLE_BIT
    }

    const { annotationCardsDotsBitsList } = getSong(songIndex),
        dotsBitsEntity = annotationCardsDotsBitsList[annotationIndex - 1]

    if (!dotsBitsEntity) {
        return null
    }

    const dotsBit = Array.isArray(dotsBitsEntity) ?
        dotsBitsEntity[cardIndex] :
        dotsBitsEntity

    return dotsBit
}

export const getDotKeysForAnnotationCard = (
    songIndex, annotationIndex, cardIndex,
) => {
    const dotsBit = getDotsBitForAnnotationCard(
        songIndex, annotationIndex, cardIndex,
    )

    return getDotKeysFromBit(dotsBit)
}
