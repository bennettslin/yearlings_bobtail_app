export const mapWormholeLinkForDispatch = (wormholeLink) => {
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
