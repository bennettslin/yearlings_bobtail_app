// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../album/api/songs'
import { getValidVerseIndex } from '../album/api/verses'
import { getValidAnnotationIndex } from '../album/api/annotations'

import { getArrayOfLength } from './general'
import {
    INITIAL_DOTS_BIT_NUMBER,
    FULL_DOTS_BIT_NUMBER
} from '../constants/dots'
import {
    SHOWN,
    AUDIO_OPTIONS,
    GENERAL_OPTIONS
} from '../constants/options'
import {
    getRoutingSongIndex,
    getRoutingVerseIndex,
    getRoutingAnnotationIndex
} from './routing'
import {
    DOTS_BIT_NUMBER,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_AUDIO_OPTION_INDEX
} from '../constants/store'

export const getWindowStorage = () => {
    return window.localStorage
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

const _getStoredSongIndex = () => (
    getValidSongIndex(_getParsedStoredInteger(SELECTED_SONG_INDEX))
)

const _getStoredVerseIndex = songIndex => (
    getValidVerseIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_VERSE_INDEX)
    )
)

const _getStoredAnnotationIndex = songIndex => (
    getValidAnnotationIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_ANNOTATION_INDEX)
    )
)

export const getInitialIndicesFromRoutingOrStorage = () => {
    const
        routingSongIndex = getRoutingSongIndex(),
        storedSongIndex = _getStoredSongIndex(),
        isRoutingStoredSameSong = routingSongIndex === storedSongIndex,

        isRoutingSongValid = Number.isFinite(routingSongIndex),

        // Set valid song. Favour routing over stored. Stored defaults to 0.
        initialSongIndex = isRoutingSongValid ?
            routingSongIndex : storedSongIndex,

        routingVerseIndex = getRoutingVerseIndex(initialSongIndex),
        storedVerseIndex = _getStoredVerseIndex(initialSongIndex),
        isRoutingVerseValid = Number.isFinite(routingVerseIndex),

        routingAnnotationIndex = getRoutingAnnotationIndex(initialSongIndex),
        storedAnnotationIndex = _getStoredAnnotationIndex(initialSongIndex),
        isRoutingAnnotationValid = Number.isFinite(routingAnnotationIndex)

    // Initialise with stored verse and annotation, which default to 0.
    let initialVerseIndex = storedVerseIndex
    let initialAnnotationIndex = storedAnnotationIndex

    // If routing song is valid, favour routing verse and annotation.
    if (isRoutingSongValid) {

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
        initialAnnotationIndex
    }
}

export const getAudioOptionFromStorage = () => {
    const
        storedOptionIndex =
            _getParsedStoredInteger(SELECTED_AUDIO_OPTION_INDEX),

        savedOptionIndex =
            getArrayOfLength(AUDIO_OPTIONS.length).some(
                index => index === storedOptionIndex
            ) ?
                storedOptionIndex :
                0

    // This only saves upon initial retrieval.
    setInStorage(SELECTED_AUDIO_OPTION_INDEX, savedOptionIndex)
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

export const getDotsBitNumberFromStorage = (initialAnnotationIndex) => {
    const storedBitNumber = _getParsedStoredInteger(DOTS_BIT_NUMBER)
    let savedBitNumber = INITIAL_DOTS_BIT_NUMBER

    // If there is an initial annotation index, preemptively select all dots.
    if (initialAnnotationIndex) {
        savedBitNumber = FULL_DOTS_BIT_NUMBER

    // Ensure stored dots bit number is valid.
    } else if (
        Number.isFinite(storedBitNumber) &&
        storedBitNumber >= 0 &&
        storedBitNumber <= FULL_DOTS_BIT_NUMBER
    ) {
        savedBitNumber = storedBitNumber
    }

    // This only saves upon initial retrieval.
    setInStorage(DOTS_BIT_NUMBER, savedBitNumber)
    return savedBitNumber
}
