// Store data in browser's local storage.
import { getTwoToThePowerOfN, convertBitNumberToTrueFalseKeys, convertTrueFalseKeysToBitNumber } from './general-helper'
import AlbumData from '../album-data'

import { AUDIO_OPTIONS,
         LYRIC_COLUMN_KEYS,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS,

         ALL_DOT_KEYS,

         WINDOW_STORAGE } from './constants'

import { SELECTED_ACCESS_INDEX,
         SELECTED_ADMIN_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_AUDIO_OPTION_INDEX,
         SELECTED_CAROUSEL_INDEX,
         SELECTED_DOT_KEYS,
         SELECTED_DOTS_INDEX,
         SELECTED_LYRIC_COLUMN_INDEX,
         SELECTED_NAV_INDEX,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_SCORE_INDEX,
         SELECTED_SONG_INDEX,
         SELECTED_TIME_PLAYED,
         SELECTED_TIPS_INDEX,
         SELECTED_TITLE_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_WIKI_INDEX } from '../constants/state'

const setInSession = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const setDotInSession = (dotKey, isActive) => {

    const bitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        trueFalseKeys = convertBitNumberToTrueFalseKeys(ALL_DOT_KEYS, bitNumber)

    trueFalseKeys[dotKey] = isActive

    setInSession(SELECTED_DOT_KEYS, convertTrueFalseKeysToBitNumber(ALL_DOT_KEYS, trueFalseKeys))
}

const _getValidatedStoredSong = () => {
    const selectedSongIndex = _validateValueForKey(SELECTED_SONG_INDEX)
    return AlbumData.songs[selectedSongIndex]
}

const _validateValueForKey = (key) => {
    const rawValue = WINDOW_STORAGE[key],

        // All values should be integers, except selected time played.
        parsedValue = key === SELECTED_TIME_PLAYED ?
            parseFloat(rawValue) : parseInt(rawValue),

        isNumber = !isNaN(parsedValue)

    let isValid

    switch (key) {
        // These must be a simple 0 or 1.
        case SELECTED_ACCESS_INDEX:
        case SELECTED_ADMIN_INDEX:
        case SELECTED_DOTS_INDEX:
        case SELECTED_SCORE_INDEX:
        case SELECTED_NAV_INDEX:
        case SELECTED_CAROUSEL_INDEX:
        case SELECTED_TITLE_INDEX:
            isValid = isNumber && parsedValue <= 1
            break

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
        case SELECTED_DOT_KEYS: {
            const maxBitNumber = getTwoToThePowerOfN(ALL_DOT_KEYS.length)

            isValid = isNumber && parsedValue < maxBitNumber
            break
        }

        // These are dependent on the album object.
        case SELECTED_SONG_INDEX:
            isValid = isNumber && parsedValue < AlbumData.songs.length
            break
        case SELECTED_ANNOTATION_INDEX: {
            const annotations = _getValidatedStoredSong().annotations

            // Logues do not have annotations.
            isValid = isNumber && annotations ?
                parsedValue <= annotations.length :
                parsedValue === 0
            break
        }
        case SELECTED_VERSE_INDEX: {
            const verseTimes = _getValidatedStoredSong().verseTimes

            // Logues do not have verseTimes.
            isValid = isNumber && verseTimes ?
                parsedValue < verseTimes.length :
                parsedValue === 0
            break
        }
        case SELECTED_WIKI_INDEX: {
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
        case SELECTED_TIME_PLAYED: {
            const totalTime = _getValidatedStoredSong().totalTime

            // Logues do not have total verseTimes.
            isValid = isNumber && totalTime ?
                parsedValue <= totalTime :
                parsedValue === 0
            break
        }

        default:
            isValid = isNumber
    }

    /**
     * If value is invalid, select and persist the default value of 0 for
     * all other keys but selected dot keys.
     */
    // TODO: Decide default for selected dot keys.
    if (!isNumber || !isValid) {
        const defaultValue = key === SELECTED_DOT_KEYS ?
            7 : 0
        setInSession(key, defaultValue)
        return defaultValue

    } else {
        return parsedValue
    }
}

export default {
    setDotInSession,
    setInSession,
    getFromSession(key) {
        const validatedValue = _validateValueForKey(key)

        // Get true-false object from bit number.
        if (key === SELECTED_DOT_KEYS) {
            const bitNumber = validatedValue,
                trueFalseKeys = convertBitNumberToTrueFalseKeys(ALL_DOT_KEYS, bitNumber)

            return trueFalseKeys

        } else {
            return validatedValue
        }
    }
}
