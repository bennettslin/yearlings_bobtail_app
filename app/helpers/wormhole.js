export const getWormholeObject = (wormholeLink) => {
    const {
        songIndex: selectedSongIndex,
        annotationIndex: selectedAnnotationIndex,
        verseIndex: selectedVerseIndex,
        columnIndex: earColumnIndex,
        destinationWormholeIndex
    } = wormholeLink

    return {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex,
        earColumnIndex,
        destinationWormholeIndex
    }
}
