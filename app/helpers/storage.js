// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../api/album/songs'
import { getValidVerseIndex } from '../api/album/verses'
import { getValidAnnotationIndex } from '../api/album/annotations'

import { getArrayOfLength } from './general'
import {
    getRoutingVerseIndex,
    getRoutingAnnotationIndex,
    getRoutingPitchIndex,
} from './routing'
import { getWindow } from '../utils/browser'
import {
    INITIAL_DOTS_BIT,
    FULL_DOTS_BIT,
} from '../constants/dots'
import {
    SHOWN,
    AUDIO_OPTIONS,
    GENERAL_OPTIONS,
} from '../constants/options'
import {
    PITCH_SEGMENT_INDEX,
    SELECTED_DOTS_BIT,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    AUDIO_OPTION_INDEX,
} from '../constants/store'
import { getValidPitchSegmentIndex } from '../api/pitch/segments'

export const getWindowStorage = () => {
    return getWindow().localStorage
}

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}

export const getBoolFromStorage = key => {
    const
        storedValue = getWindowStorage()[key],
        savedValue = storedValue === 'true'

    // This only saves upon initial retrieval.
    setBoolInStorage(key, savedValue)
    return savedValue
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

const _getParsedStoredInteger = key => (
    parseInt(getWindowStorage()[key])
)

export const getStoredSongIndex = () => (
    getValidSongIndex(_getParsedStoredInteger(SELECTED_SONG_INDEX))
)

export const getStoredVerseIndex = songIndex => (
    getValidVerseIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_VERSE_INDEX)
    )
)

export const getStoredAnnotationIndex = songIndex => (
    getValidAnnotationIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_ANNOTATION_INDEX)
    )
)

export const getInitialIndicesFromRoutingOrStorage = pageSongIndex => {
    const
        storedSongIndex = getStoredSongIndex(),
        isPageSongValid = Number.isFinite(pageSongIndex),

        // Set valid song. Favour page over stored. Stored defaults to 0.
        initialSongIndex = isPageSongValid ?
            pageSongIndex : storedSongIndex,

        routingVerseIndex = getRoutingVerseIndex(initialSongIndex),
        storedVerseIndex = getStoredVerseIndex(initialSongIndex),
        isRoutingVerseValid = Number.isFinite(routingVerseIndex),

        routingAnnotationIndex = getRoutingAnnotationIndex(initialSongIndex),
        storedAnnotationIndex = getStoredAnnotationIndex(initialSongIndex),
        isRoutingAnnotationValid = Number.isFinite(routingAnnotationIndex)

    // Initialise with stored verse and annotation, which default to 0.
    let initialVerseIndex = storedVerseIndex
    let initialAnnotationIndex = storedAnnotationIndex

    // If page song is valid, favor routing verse and annotation.
    if (isPageSongValid) {
        const isRoutingStoredSameSong = pageSongIndex === storedSongIndex

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

    // This only saves upon initial retrieval.
    setInStorage(SELECTED_SONG_INDEX, initialSongIndex)
    setInStorage(SELECTED_VERSE_INDEX, initialVerseIndex)
    setInStorage(SELECTED_ANNOTATION_INDEX, initialAnnotationIndex)

    return {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
    }
}

export const getAudioOptionFromStorage = () => {
    const
        storedOptionIndex =
            _getParsedStoredInteger(AUDIO_OPTION_INDEX),

        savedOptionIndex =
            getArrayOfLength(AUDIO_OPTIONS.length).some(
                index => index === storedOptionIndex
            ) ?
                storedOptionIndex :
                0

    // This only saves upon initial retrieval.
    setInStorage(AUDIO_OPTION_INDEX, savedOptionIndex)
    return savedOptionIndex
}

export const getOptionFromStorage = key => {
    const
        storedOption = getWindowStorage()[key],
        savedOption =
            GENERAL_OPTIONS.some(option => option === storedOption) ?
                storedOption :
                SHOWN

    // This only saves upon initial retrieval.
    setInStorage(key, savedOption)
    return savedOption
}

export const getDotsBitFromStorage = (initialAnnotationIndex) => {
    const storedDotsBit = _getParsedStoredInteger(SELECTED_DOTS_BIT)
    let savedDotsBit = INITIAL_DOTS_BIT

    // If there is an initial annotation index, preemptively select all dots.
    if (initialAnnotationIndex) {
        savedDotsBit = FULL_DOTS_BIT

    // Ensure stored dots bit number is valid.
    } else if (
        Number.isFinite(storedDotsBit) &&
        storedDotsBit >= 0 &&
        storedDotsBit <= FULL_DOTS_BIT
    ) {
        savedDotsBit = storedDotsBit
    }

    // This only saves upon initial retrieval.
    setInStorage(SELECTED_DOTS_BIT, savedDotsBit)
    return savedDotsBit
}

export const getPitchSegmentIndexFromStorage = () => {
    const storedPitchSegmentIndex = getValidPitchSegmentIndex(
        _getParsedStoredInteger(PITCH_SEGMENT_INDEX)
    )

    return storedPitchSegmentIndex
}

export const getInitialPitchIndexFromRoutingOrStorage = () => {
    const initialPitchIndex =
        Number.isFinite(getRoutingPitchIndex()) ?
            getRoutingPitchIndex() :
            getPitchSegmentIndexFromStorage()

    // This only saves upon initial retrieval.
    setInStorage(PITCH_SEGMENT_INDEX, initialPitchIndex)

    return initialPitchIndex
}
