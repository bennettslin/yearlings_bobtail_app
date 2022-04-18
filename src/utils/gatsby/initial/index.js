
import {
    getRoutingAnnotationIndex,
    getRoutingPitchIndex,
    getRoutingPromoKey,
    getRoutingSongIndex,
    getRoutingVerseIndex,
} from '../routing'
import {
    getStoredAnnotationIndex,
    getStoredSongIndex,
    getStoredVerseIndex,
    setInStorage,
} from '../../storage'
import {
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
} from '../../../constants/store'

export const getInitialAlbumIndices = (pathname, search) => {
    const
        routingSongIndex = getRoutingSongIndex(pathname),
        storedSongIndex = getStoredSongIndex(),
        isRoutingSongValid = Number.isFinite(routingSongIndex),

        // Set valid song. Favour routing over stored. Stored defaults to 0.
        initialSongIndex = isRoutingSongValid ?
            routingSongIndex : storedSongIndex,

        routingVerseIndex = getRoutingVerseIndex(search, initialSongIndex),
        storedVerseIndex = getStoredVerseIndex(initialSongIndex),
        isRoutingVerseValid = Number.isFinite(routingVerseIndex),

        routingAnnotationIndex =
            getRoutingAnnotationIndex(search, initialSongIndex),
        storedAnnotationIndex = getStoredAnnotationIndex(initialSongIndex),
        isRoutingAnnotationValid = Number.isFinite(routingAnnotationIndex)

    // Initialise with stored verse and annotation, which default to 0.
    let initialVerseIndex = storedVerseIndex
    let initialAnnotationIndex = storedAnnotationIndex

    // If routing song is valid, favor routing verse and annotation.
    if (isRoutingSongValid) {
        const isRoutingStoredSameSong = routingSongIndex === storedSongIndex

        // Set routing verse if valid.
        if (isRoutingVerseValid) {
            initialVerseIndex = routingVerseIndex

        // If stored song is not the same as routing song, set to 0.
        } else if (!isRoutingStoredSameSong) {
            initialVerseIndex = 0
        }

        // Set routing annotation if valid.
        if (isRoutingAnnotationValid) {
            initialAnnotationIndex = routingAnnotationIndex

        // If stored song is not the same as routing song, set to 0.
        } else if (!isRoutingStoredSameSong) {
            initialAnnotationIndex = 0
        }
    }

    // Save once upon initial retrieval.
    setInStorage(SELECTED_SONG_INDEX, initialSongIndex)
    setInStorage(SELECTED_VERSE_INDEX, initialVerseIndex)
    setInStorage(SELECTED_ANNOTATION_INDEX, initialAnnotationIndex)

    return {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
    }
}

export const getInitialPitchIndex = (pitchKey, pathname = '') => {
    /**
     * When called by album reducer, the pathname is obviously not passed,
     * so we default to the stored index.
     */
    const routingPitchIndex = getRoutingPitchIndex(pitchKey, pathname)
    return Number.isFinite(routingPitchIndex) ? routingPitchIndex : 1
}

export const getInitialPromoPageKey = (pathname = '') => {
    // TODO: Get routing or stored. Set initial storage.
    return getRoutingPromoKey(pathname)
}
