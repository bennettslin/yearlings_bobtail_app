import { DESTINATION_WORMHOLE_INDEX } from '../constants/lyrics'

export const getWormholeObject = (wormholeLink) => {
    const {
        songIndex: selectedSongIndex,
        annotationIndex: selectedAnnotationIndex,
        verseIndex: selectedVerseIndex,
        columnIndex: earColumnIndex,
        [DESTINATION_WORMHOLE_INDEX]: destinationWormholeIndex
    } = wormholeLink

    return {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex,
        earColumnIndex,
        destinationWormholeIndex
    }
}
