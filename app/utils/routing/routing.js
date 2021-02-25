import qs from 'qs'
import { getIsSongValid } from '../../api/album/songs'
import { getIsVerseValid } from '../../api/album/verses'
import { getIsAnnotationValid } from '../../api/album/annotations'
import {
    getIndexFromPath,
    getValidPitchIndex,
} from './pathname'
import {
    getStoredAnnotationIndex,
    getStoredSongIndex,
    getStoredVerseIndex,
    getPitchSegmentIndexFromStorage,
    setInStorage,
} from '../storage'
import {
    ANNOTATION_QUERY_FIELD,
    VERSE_QUERY_FIELD,
} from '../../constants/routing'
import {
    PITCH_SEGMENT_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
} from '../../constants/store'

export const getRoutingSongIndex = pathname => {
    const routingSongIndex = getIndexFromPath(pathname)

    return getIsSongValid(routingSongIndex) ? routingSongIndex : NaN
}

const _getQueryStringIndex = (search, key) => {
    return search ?
        parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key]) :
        NaN
}

export const getRoutingVerseIndex = (search, songIndex) => {
    const routingVerseIndex = _getQueryStringIndex(
        search,
        VERSE_QUERY_FIELD
    )
    return getIsVerseValid(
        songIndex,
        routingVerseIndex
    ) ? routingVerseIndex : NaN
}

export const getRoutingAnnotationIndex = (search, songIndex) => {
    const routingAnnotationIndex = _getQueryStringIndex(
        search,
        ANNOTATION_QUERY_FIELD
    )
    return getIsAnnotationValid(
        songIndex,
        routingAnnotationIndex
    ) ? routingAnnotationIndex : NaN
}

export const getRoutingPitchIndex = pathname => (
    getValidPitchIndex(pathname)
)

export const getInitialSelectedIndices = (pathname, search) => {
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

    console.log(`routingSongIndex: ${routingSongIndex}`)
    console.log(`storedSongIndex: ${storedSongIndex}`)

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

export const getInitialPitchIndex = pathname => {
    const initialPitchIndex =
        pathname !== undefined ?
            getRoutingPitchIndex(pathname) :
            getPitchSegmentIndexFromStorage()

    // Save once upon initial retrieval.
    setInStorage(PITCH_SEGMENT_INDEX, initialPitchIndex)

    return initialPitchIndex
}
