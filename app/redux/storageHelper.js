// Helper for getting and setting state persisted in user's local storage.
import album from '../album'

import { getSongVersesCount } from '../album/api/verses'

import {
    getTwoToThePowerOfN,
    getObjectFromBitNumber
} from '../helpers/bit'

import {
    ORDERED_DOT_KEYS,
    INITIAL_DOTS_BIT_NUMBER
} from '../constants/dots'
import {
    SHOWN,
    HIDDEN,
    DISABLED,
    AUDIO_OPTIONS
} from '../constants/options'
import { getWindowStorage, setInStorage } from '../utils/window'

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
        parsedValue = parseInt(getWindowStorage()[key]),
        valueIsNumber = Number.isFinite(parsedValue)

    let isValid

    switch (key) {

        // These are dependent on the album object.
        case SELECTED_SONG_INDEX:
            isValid =
                valueIsNumber &&
                parsedValue > -1 &&
                parsedValue < album.songs.length
            break
        case SELECTED_ANNOTATION_INDEX:
        {
            const annotations = _getValidatedStoredSong().annotations

            // Logues do not have annotations.
            isValid = valueIsNumber && annotations ?
                parsedValue <= annotations.length : parsedValue === 0
            break
        }
        case SELECTED_VERSE_INDEX:
        {
            const songVersesCount = getSongVersesCount(
                _getValidatedStoredSongIndex()
            )

            // Logues do not have songVersesCount.
            isValid =
                valueIsNumber &&
                parsedValue > -1 &&
                songVersesCount ?
                    parsedValue < songVersesCount :
                    parsedValue === 0
            break
        }
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

export const getIndexFromStorage = (key) => {
    return _validateIndexForKey(key)
}

// TODO: Put this in a better place. This isn't really a storage helper.
export const getEmptyDotsStore = () => {
    // Get true-false object from bit number.
    const dotsSlideBitNumber = 0,
        dotsObject = getObjectFromBitNumber({
            keysArray: ORDERED_DOT_KEYS,
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
            keysArray: ORDERED_DOT_KEYS,
            bitNumber: dotsBitNumber
        })

    return {
        dotsBitNumber,
        ...dotsObject
    }
}

export const getOptionFromStorage = (key) => {
    const storedValue = getWindowStorage()[key]

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

    getWindowStorage()[key] = value
}
