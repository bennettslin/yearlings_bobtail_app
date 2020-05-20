// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../album/api/songs'
import { getValidVerseIndex } from '../album/api/verses'
import { getValidAnnotationIndex } from '../album/api/annotations'

import {
    getTwoToThePowerOfN,
    getObjectFromBitNumber
} from './bit'

import {
    ORDERED_DOT_KEYS,
    INITIAL_DOTS_BIT_NUMBER
} from '../constants/dots'
import {
    SHOWN,
    HIDDEN,
    AUDIO_OPTIONS,
    GENERAL_OPTIONS
} from '../constants/options'
import { getWindowStorage, setInStorage } from '../utils/window'

import {
    DOTS_BIT_NUMBER,

    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,

    SELECTED_AUDIO_OPTION_INDEX
} from '../constants/store'

// TODO: This is now used only for audio options. Just do an array create and some.
const _validateIndexForKey = key => {
    const
        parsedValue = parseInt(getWindowStorage()[key]),
        valueIsNumber = Number.isFinite(parsedValue)

    let isValid

    switch (key) {
        // These must be less than the length of options.
        case SELECTED_AUDIO_OPTION_INDEX:
            isValid = valueIsNumber && parsedValue < AUDIO_OPTIONS.length
            break

        default:
            isValid = valueIsNumber
    }

    /**
     * If value is invalid, select and persist the default value of 0.
     */
    if (!isValid) {
        const defaultValue = 0
        setInStorage(key, defaultValue)
        return defaultValue

    } else {
        return parsedValue
    }
}

export const getIndexFromStorage = key => {
    return _validateIndexForKey(key)
}

const _getParsedStoredIndex = key => (
    parseInt(getWindowStorage()[key])
)

export const getSelectedIndicesFromStorage = () => {
    const
        storedSongIndex = getValidSongIndex(
            _getParsedStoredIndex(SELECTED_SONG_INDEX)
        ),
        storedVerseIndex = getValidVerseIndex(
            storedSongIndex,
            _getParsedStoredIndex(SELECTED_VERSE_INDEX)
        ),
        storedAnnotationIndex = getValidAnnotationIndex(
            storedSongIndex,
            _getParsedStoredIndex(SELECTED_ANNOTATION_INDEX)
        )

    return {
        storedSongIndex,
        storedVerseIndex,
        storedAnnotationIndex
    }
}

// TODO: This should follow getter and setter pattern.
const _getValidatedDotsBitNumber = () => {
    const
        parsedBitNumber = parseInt(getWindowStorage()[DOTS_BIT_NUMBER]),
        valueIsNumber = Number.isFinite(parsedBitNumber),
        maxBitNumber = getTwoToThePowerOfN(ORDERED_DOT_KEYS.length),
        isValid = valueIsNumber && parsedBitNumber < maxBitNumber

    if (isValid) {
        return parsedBitNumber

    } else {
        // If invalid, reset in storage to default state.
        setInStorage(DOTS_BIT_NUMBER, INITIAL_DOTS_BIT_NUMBER)
        return INITIAL_DOTS_BIT_NUMBER
    }
}

export const getDotsFromStorage = () => {
    const validatedValue = _getValidatedDotsBitNumber(),

        // Get true-false object from bit number.
        dotsBitNumber = validatedValue,
        dotsObject = getObjectFromBitNumber({
            keysArray: ORDERED_DOT_KEYS,
            bitNumber: dotsBitNumber
        })

    return {
        dotsBitNumber,
        ...dotsObject
    }
}

export const getOptionFromStorage = key => {
    const storedOption = getWindowStorage()[key]
    return GENERAL_OPTIONS.some(option => option === storedOption) ?
        storedOption :
        SHOWN
}

export const setOptionInStorage = (key, value) => {
    /**
     * Always start page with all the options hidden, because mounting calls
     * the same methods as if the song changed.
     */
    getWindowStorage()[key] = value === SHOWN ? HIDDEN : value
}
