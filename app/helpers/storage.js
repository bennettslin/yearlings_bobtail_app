// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../album/api/songs'
import { getValidVerseIndex } from '../album/api/verses'
import { getValidAnnotationIndex } from '../album/api/annotations'

import {
    getTwoToThePowerOfN,
    getObjectFromBitNumber
} from './bit'
import { getArrayOfLength } from './general'

import {
    ORDERED_DOT_KEYS,
    INITIAL_DOTS_BIT_NUMBER
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
import { getWindowStorage } from '../utils/window'

import {
    DOTS_BIT_NUMBER,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_AUDIO_OPTION_INDEX
} from '../constants/store'

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

    return {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex
    }
}

export const getAudioOptionFromStorage = () => {
    const storedAudioOptionIndex =
        _getParsedStoredInteger(SELECTED_AUDIO_OPTION_INDEX)

    return getArrayOfLength(AUDIO_OPTIONS.length).some(
        index => index === storedAudioOptionIndex
    ) ?
        storedAudioOptionIndex :
        0
}

export const getOptionFromStorage = key => {
    const storedOption = getWindowStorage()[key]
    return GENERAL_OPTIONS.some(option => option === storedOption) ?
        storedOption :
        SHOWN
}

const _getValidatedDotsBitNumber = () => {
    const
        parsedBitNumber = _getParsedStoredInteger(DOTS_BIT_NUMBER),
        isValid =
            Number.isFinite(parsedBitNumber) &&
            parsedBitNumber < getTwoToThePowerOfN(ORDERED_DOT_KEYS.length)

    return isValid ? parsedBitNumber : INITIAL_DOTS_BIT_NUMBER
}

export const getDotsFromStorage = () => {
    const validatedValue = _getValidatedDotsBitNumber()
    return {
        dotsBitNumber: validatedValue,
        ...getObjectFromBitNumber({
            keysArray: ORDERED_DOT_KEYS,
            bitNumber: validatedValue
        })
    }
}
