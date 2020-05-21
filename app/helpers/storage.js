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

export const getInitialIndicesFromRoutingOrStorage = () => {
    // For each index, favour routing over storage.
    const
        routingSongIndex = getRoutingSongIndex(),
        initialSongIndex = Number.isFinite(routingSongIndex) ?
            routingSongIndex :
            getValidSongIndex(
                _getParsedStoredInteger(SELECTED_SONG_INDEX)
            ),
        routingVerseIndex = getRoutingVerseIndex(initialSongIndex),
        initialVerseIndex = Number.isFinite(routingVerseIndex) ?
            routingVerseIndex :
            getValidVerseIndex(
                initialSongIndex,
                _getParsedStoredInteger(SELECTED_VERSE_INDEX)
            ),
        routingAnnotationIndex = getRoutingAnnotationIndex(initialSongIndex),
        initialAnnotationIndex = Number.isFinite(routingAnnotationIndex) ?
            routingAnnotationIndex :
            getValidAnnotationIndex(
                initialSongIndex,
                _getParsedStoredInteger(SELECTED_ANNOTATION_INDEX)
            )

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
