// Helper for getting and setting state persisted in user's local storage.

import album from 'server/album'

import {
    getTwoToThePowerOfN,
    convertBitNumberToTrueFalseKeys,
    setNewValueInBitNumber
} from 'helpers/bitHelper'

import {
    ALL_DOT_KEYS,
    INITIAL_DOTS_BIT_NUMBER
} from 'constants/dots'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'
import {
    SHOWN,
    HIDDEN,
    DISABLED,
    AUDIO_OPTIONS
} from 'constants/options'
import { WINDOW_STORAGE } from 'constants/state'

import {
    SELECTED_DOT_KEYS,

    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,

    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_EAR_COLUMN_INDEX
} from './storeKeys'

const _getValidatedStoredSong = () => {
    const selectedSongIndex = _validateIndexForKey(SELECTED_SONG_INDEX)
    return album.songs[selectedSongIndex]
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
            const songVerseConfigs =
                    _getValidatedStoredSong().songVerseConfigs

            // Logues do not have songVerseConfigs.
            isValid = isNumber && songVerseConfigs ?
                parsedValue < songVerseConfigs.length :
                parsedValue === 0
            break
        }
        // These must be less than the length of options.
        case SELECTED_AUDIO_OPTION_INDEX:
            isValid = isNumber && parsedValue < AUDIO_OPTIONS.length
            break
        case SELECTED_EAR_COLUMN_INDEX:
            isValid = isNumber && parsedValue < EAR_COLUMN_KEYS.length
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

const getIndexFromStorage = (key) => {
    return _validateIndexForKey(key)
}

const setInStorage = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const _getValidatedDotsBitNumber = () => {
    const
        parsedBitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        isNumber = !isNaN(parsedBitNumber),
        maxBitNumber = getTwoToThePowerOfN(ALL_DOT_KEYS.length),
        isValid = isNumber && parsedBitNumber < maxBitNumber

    if (isValid) {
        return parsedBitNumber

    } else {
        // If invalid, reset in storage to default state.
        setInStorage(SELECTED_DOT_KEYS, INITIAL_DOTS_BIT_NUMBER)
        return INITIAL_DOTS_BIT_NUMBER
    }
}

const getDotsFromStorage = () => {
    const validatedValue = _getValidatedDotsBitNumber(),

        // Get true-false object from bit number.
        dotsBitNumber = validatedValue,
        dotsObject = convertBitNumberToTrueFalseKeys({
            keysArray: ALL_DOT_KEYS,
            bitNumber: dotsBitNumber
        })

    return {
        dotsBitNumber,
        ...dotsObject
    }
}

const setDotInStorage = (key, value) => {
    const bitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        newBitNumber = setNewValueInBitNumber({
            keysArray: ALL_DOT_KEYS,
            bitNumber,
            key,
            value
        })

    setInStorage(SELECTED_DOT_KEYS, newBitNumber)

    return newBitNumber
}

const getBoolFromStorage = (key) => {
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

const setBoolInStorage = (key, value) => {
    WINDOW_STORAGE[key] = value ? 'true' : 'false'
}

const getStringOptionFromStorage = (key) => {
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

export {
    getIndexFromStorage,
    setInStorage,

    getDotsFromStorage,
    setDotInStorage,

    getBoolFromStorage,
    setBoolInStorage,

    getStringOptionFromStorage
}
