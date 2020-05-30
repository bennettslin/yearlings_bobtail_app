import { getSong } from './songs'

export const getSourceWormholeIndices = (songIndex, annotationIndex) => {
    const
        { annotationCardsWormholeLinksList } = getSong(songIndex),
        wormholeLinks = annotationCardsWormholeLinksList[annotationIndex - 1]

    return wormholeLinks.map(wormholeLink => (
        wormholeLink.sourceWormholeIndex
    ))
}

const mapWormholeLinkForDispatch = (wormholeLink) => {
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

const getWormholeLinksForAnnotation = (
    songIndex,
    annotationIndex
) => {
    const { annotationCardsWormholeLinksList } = getSong(songIndex)
    return annotationCardsWormholeLinksList[annotationIndex - 1]
}

export const getWormholeLinkForWormhole = (
    songIndex,
    annotationIndex,
    wormholeIndex

) => {
    const wormholeLinks = getWormholeLinksForAnnotation(
        songIndex,
        annotationIndex
    )

    return mapWormholeLinkForDispatch(wormholeLinks[wormholeIndex])
}

export const getWormholeLinkForWikiWormhole = (
    songIndex,
    annotationIndex,
    wikiWormholeIndex

) => {
    const wormholeLinks = getWormholeLinksForAnnotation(
        songIndex,
        annotationIndex
    )

    const wormholeLink = wormholeLinks.find(wormholeLink => (
        wormholeLink.sourceWormholeIndex === wikiWormholeIndex
    ))
    return mapWormholeLinkForDispatch(wormholeLink)
}
