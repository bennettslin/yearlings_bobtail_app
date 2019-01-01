import { getAnnotationCardObject } from 'album/api/annotations'

export const parseWormholeLinkForDispatch = (wormholeLink) => {
    const {
        songIndex: selectedSongIndex,
        annotationIndex: selectedAnnotationIndex,
        verseIndex: selectedVerseIndex,
        columnIndex: earColumnIndex,
        destinationWormholeIndex,
        wormholePrefix
    } = wormholeLink

    return {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex,
        earColumnIndex,
        destinationWormholeIndex,
        wormholePrefix
    }
}

export const getCardWormholeLinksArray = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    // Called by annotation wormholes block component.
    const cardObject = getAnnotationCardObject({
        songIndex,
        annotationIndex,
        cardIndex
    })

    return cardObject ? cardObject.wormholeLinks : null
}
