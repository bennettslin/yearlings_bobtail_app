// Helper for getting and setting state persisted in user's local storage.

import album from 'album'

import { getSongVersesCount } from 'album/api/verses'

import {
    getTwoToThePowerOfN,
    getObjectFromBitNumber
} from 'helpers/bit'

import {
    ALL_DOT_KEYS,
    INITIAL_DOTS_BIT_NUMBER
} from 'constants/dots'
import {
    SHOWN,
    HIDDEN,
    DISABLED,
    AUDIO_OPTIONS
} from 'constants/options'
import { WINDOW_STORAGE } from 'constants/state'

import {
    DOTS_BIT_NUMBER,

    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,

    SELECTED_AUDIO_OPTION_INDEX
} from './storeKeys'

const _getValidatedStoredSong = () => {
    const selectedSongIndex = _validateIndexForKey(SELECTED_SONG_INDEX)
    return album.songs[selectedSongIndex]
}

const _getValidatedStoredSongIndex = () => {
    return _validateIndexForKey(SELECTED_SONG_INDEX)
}

const _validateIndexForKey = (key) => {
    const
        parsedValue = parseInt(WINDOW_STORAGE[key]),
        isNumber = !isNaN(parsedValue)

    let isValid

    switch (key) {

        // These are dependent on the album object.
        case SELECTED_SONG_INDEX:
            isValid = isNumber && parsedValue < album.songs.length
            break
        case SELECTED_ANNOTATION_INDEX:
        {
            const annotations = _getValidatedStoredSong().annotations

            // Logues do not have annotations.
            isValid = isNumber && annotations ?
                parsedValue <= annotations.length : parsedValue === 0
            break
        }
        case SELECTED_VERSE_INDEX:
        {
            const songVersesCount = getSongVersesCount(
                _getValidatedStoredSongIndex()
            )

            // Logues do not have songVersesCount.
            isValid = isNumber && songVersesCount ?
                parsedValue < songVersesCount :
                parsedValue === 0
            break
        }
        // These must be less than the length of options.
        case SELECTED_AUDIO_OPTION_INDEX:
            isValid = isNumber && parsedValue < AUDIO_OPTIONS.length
            break

        default:
            isValid = isNumber
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

const _getValidatedDotsBitNumber = () => {
    const
        parsedBitNumber = parseInt(WINDOW_STORAGE[DOTS_BIT_NUMBER]),
        isNumber = !isNaN(parsedBitNumber),
        maxBitNumber = getTwoToThePowerOfN(ALL_DOT_KEYS.length),
        isValid = isNumber && parsedBitNumber < maxBitNumber

    if (isValid) {
        return parsedBitNumber

    } else {
        // If invalid, reset in storage to default state.
        setInStorage(DOTS_BIT_NUMBER, INITIAL_DOTS_BIT_NUMBER)
        return INITIAL_DOTS_BIT_NUMBER
    }
}

export const getIndexFromStorage = (key) => {
    return _validateIndexForKey(key)
}

export const setInStorage = (key, value) => {
    WINDOW_STORAGE[key] = value
}

// TODO: Put this in a better place. This isn't really a storage helper.
export const getEmptyDotsStore = () => {
    // Get true-false object from bit number.
    const dotsSlideBitNumber = 0,
        dotsObject = getObjectFromBitNumber({
            keysArray: ALL_DOT_KEYS,
            bitNumber: dotsSlideBitNumber
        })

    return {
        dotsSlideBitNumber,
        ...dotsObject
    }
}

export const getDotsFromStorage = () => {
    const validatedValue = _getValidatedDotsBitNumber(),

        // Get true-false object from bit number.
        dotsBitNumber = validatedValue,
        dotsObject = getObjectFromBitNumber({
            keysArray: ALL_DOT_KEYS,
            bitNumber: dotsBitNumber
        })

    return {
        dotsBitNumber,
        ...dotsObject
    }
}

export const getBoolFromStorage = (key) => {
    const storedValue = WINDOW_STORAGE[key]
    switch (storedValue) {
        case 'true':
            return true
        case 'false':
            return false
        default:
            return undefined
    }
}

export const setBoolInStorage = (key, value) => {
    WINDOW_STORAGE[key] = value ? 'true' : 'false'
}

export const getOptionFromStorage = (key) => {
    const storedValue = WINDOW_STORAGE[key]

    if (
        storedValue === SHOWN ||
        storedValue === HIDDEN ||
        storedValue === DISABLED
    ) {
        return storedValue
    } else {
        return undefined
    }
}

export const setOptionInStorage = (key, value) => {
    /**
     * Always start page with all the options hidden, because mounting calls
     * the same methods as if the song changed.
     */
    if (value === SHOWN) {
        value = HIDDEN
    }

    WINDOW_STORAGE[key] = value
}
