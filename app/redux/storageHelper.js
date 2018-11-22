// Helper for getting and setting state persisted in user's local storage.

import album from 'server/album'

import {
    getTwoToThePowerOfN,
    convertBitNumberToTrueFalseKeys,
    setNewValueInBitNumber
} from 'helpers/bitHelper'

import {
    ALL_DOT_KEYS
} from 'constants/dots'
import {
    LYRIC_COLUMN_KEYS
} from 'constants/lyrics'
import {
    AUDIO_OPTIONS,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'
import {
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,

    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_DOT_KEYS,
    SELECTED_LYRIC_COLUMN_INDEX,
    SELECTED_OVERVIEW_INDEX,
    SELECTED_TIPS_INDEX,
    SELECTED_WIKI_INDEX,
    WINDOW_STORAGE
} from 'constants/state'

const _getValidatedStoredSong = () => {
    const selectedSongIndex = _validateValueForKey(SELECTED_SONG_INDEX)
    return album.songs[selectedSongIndex]
}

const _validateValueForKey = (key) => {
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
        case SELECTED_WIKI_INDEX:
        {
            const annotations = _getValidatedStoredSong().annotations

            if (annotations) {
                const selectedAnnotationIndex = _validateValueForKey(SELECTED_ANNOTATION_INDEX),
                    selectedAnnotation = selectedAnnotationIndex > 0 && annotations[selectedAnnotationIndex - 1],
                    annotationAnchors = selectedAnnotation && selectedAnnotation.annotationAnchors

                // If it's a wiki, entry wil be string.
                isValid = isNumber && annotationAnchors && typeof annotationAnchors[parsedValue - 1] === 'string'

                // Logues do not have annotations.
            } else {
                isValid = isNumber && parsedValue === 0
            }
            break
        }
        // These must be less than the length of options.
        case SELECTED_AUDIO_OPTION_INDEX:
            isValid = isNumber && parsedValue < AUDIO_OPTIONS.length
            break
        case SELECTED_LYRIC_COLUMN_INDEX:
            isValid = isNumber && parsedValue < LYRIC_COLUMN_KEYS.length
            break
        case SELECTED_OVERVIEW_INDEX:
            isValid = isNumber && parsedValue < OVERVIEW_OPTIONS.length
            break
        case SELECTED_TIPS_INDEX:
            isValid = isNumber && parsedValue < TIPS_OPTIONS.length
            break

            /**
             * This must be a bit number less than the exponent of the number
             * of dot keys.
             */
        case SELECTED_DOT_KEYS:
        {
            const maxBitNumber = getTwoToThePowerOfN(ALL_DOT_KEYS.length)

            isValid = isNumber && parsedValue < maxBitNumber
            break
        }

        default:
            isValid = isNumber
    }

    /**
     * If value is invalid, select and persist the default value of 0 for
     * all other keys but selected dot keys.
     */
    if (!isNumber || !isValid) {
        // TODO: Decide default for selected dot keys.
        const defaultValue = key === SELECTED_DOT_KEYS ?
            7 : 0
        setInStorage(key, defaultValue)
        return defaultValue

    } else {
        return parsedValue
    }
}

const getFromStorage = (key) => {
    const validatedValue = _validateValueForKey(key)

    // Get true-false object from bit number.
    if (key === SELECTED_DOT_KEYS) {
        const bitNumber = validatedValue,
            trueFalseKeys = convertBitNumberToTrueFalseKeys({
                keysArray: ALL_DOT_KEYS,
                bitNumber
            })

        return trueFalseKeys

    } else {
        return validatedValue
    }
}

const setInStorage = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const setDotInStorage = (dotKey, isActive) => {
    const bitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        newBitNumber = setNewValueInBitNumber({
            keysArray: ALL_DOT_KEYS,
            bitNumber,
            key: dotKey,
            value: isActive
        })

    setInStorage(SELECTED_DOT_KEYS, newBitNumber)
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

export {
    getFromStorage,
    setInStorage,
    setDotInStorage,
    getBoolFromStorage,
    setBoolInStorage
}
