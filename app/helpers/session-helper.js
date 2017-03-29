// Store data in browser's local storage.
import { convertBitNumberToTrueFalseKeys, convertTrueFalseKeysToBitNumber } from './general-helper'
import { ACCESSED_ON,
         SELECTED_ADMIN_INDEX,
         SELECTED_DOTS_INDEX,
         SELECTED_NAV_INDEX,
         SELECTED_SCORE_INDEX,

         SELECTED_AUDIO_OPTION_INDEX,
         SELECTED_LYRIC_COLUMN_INDEX,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_TIPS_INDEX,
         AUDIO_OPTIONS,
         LYRIC_COLUMN_KEYS,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS,

         SELECTED_DOT_KEYS,
         ALL_DOT_KEYS,

         SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_WIKI_INDEX,

         SELECTED_TIME_PLAYED,

         WINDOW_STORAGE } from './constants'

const setInSession = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const setDotInSession = (dotKey, isActive) => {

    const bitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        trueFalseKeys = convertBitNumberToTrueFalseKeys(ALL_DOT_KEYS, bitNumber)

    trueFalseKeys[dotKey] = isActive

    setInSession(SELECTED_DOT_KEYS, convertTrueFalseKeysToBitNumber(ALL_DOT_KEYS, trueFalseKeys))
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
        case ACCESSED_ON:
        case SELECTED_ADMIN_INDEX:
        case SELECTED_DOTS_INDEX:
        case SELECTED_SCORE_INDEX:
        case SELECTED_NAV_INDEX:
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

        // TODO: This must be 0 to 255.
        case SELECTED_DOT_KEYS:
            isValid = isNumber
            break

        // TODO: These are dependent on the album object.
        case SELECTED_SONG_INDEX:
            isValid = isNumber
            break
        case SELECTED_ANNOTATION_INDEX:
            isValid = isNumber
            break
        case SELECTED_VERSE_INDEX:
            isValid = isNumber
            break
        case SELECTED_WIKI_INDEX:
            isValid = isNumber
            break
        case SELECTED_TIME_PLAYED:
            isValid = isNumber
            break

        default:
            isValid = isNumber
    }

    return isNumber && isValid ? parsedValue : 0
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
