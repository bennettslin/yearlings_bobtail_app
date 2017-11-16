// Helper for getting and setting state persisted in user's local storage.
import { getTwoToThePowerOfN,
         convertBitNumberToTrueFalseKeys,
         setNewValueInBitNumber } from './bit-helper'
import AlbumData from '../album-data'

import { ALL_DOT_KEYS } from '../constants/dots'
import { LYRIC_COLUMN_KEYS } from '../constants/lyrics'
import { AUDIO_OPTIONS,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS,
         DISABLED } from '../constants/options'
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
         SELECTED_WIKI_INDEX,
         WINDOW_STORAGE } from '../constants/state'

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

        /**
         * Don't show dots section if overview or tips will show.
         */
        case SELECTED_DOTS_INDEX: {
            const selectedOverviewIndex = _validateValueForKey(SELECTED_OVERVIEW_INDEX),
                selectedTipsIndex = _validateValueForKey(SELECTED_TIPS_INDEX),
                overviewWillShow = OVERVIEW_OPTIONS[selectedOverviewIndex] !== DISABLED,
                tipsWillShow = TIPS_OPTIONS[selectedTipsIndex] !== DISABLED

            isValid = isNumber && parsedValue <= 1 && !overviewWillShow && !tipsWillShow
            break
        }

        // These must be a simple 0 or 1.
        case SELECTED_ACCESS_INDEX:
        case SELECTED_ADMIN_INDEX:
        case SELECTED_SCORE_INDEX:
        case SELECTED_NAV_INDEX:
        case SELECTED_CAROUSEL_INDEX:
        case SELECTED_TITLE_INDEX:
            isValid = isNumber && parsedValue <= 1
            break

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
        setInStorage(key, defaultValue)
        return defaultValue

    } else {
        return parsedValue
    }
}

export default {
    setDotInStorage,
    setInStorage,
    getFromStorage(key) {
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
}
