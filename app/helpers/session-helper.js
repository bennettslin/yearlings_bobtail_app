// Store data in browser's local storage.
import { convertBitNumberToTrueFalseKeys, convertTrueFalseKeysToBitNumber } from 'helpers/general-helper'
import { SELECTED_DOT_KEYS,
         SELECTED_TIME_PLAYED,
         ALL_DOT_KEYS,
         WINDOW_STORAGE } from './constants'

// TODO: Add validation methods that return valid or default value for all, and test them! ʦ

const setInSession = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const setDotInSession = (dotKey, isActive) => {

    const bitNumber = parseInt(WINDOW_STORAGE[SELECTED_DOT_KEYS]),
        trueFalseKeys = convertBitNumberToTrueFalseKeys(ALL_DOT_KEYS, bitNumber)

    trueFalseKeys[dotKey] = isActive

    setInSession(SELECTED_DOT_KEYS, convertTrueFalseKeysToBitNumber(ALL_DOT_KEYS, trueFalseKeys))
}

export default {
    setDotInSession,
    setInSession,

    // TODO: This currently does not allow for float times.
    getFromSession(key) {
        if (key === SELECTED_DOT_KEYS) {
            const bitNumber = parseInt(WINDOW_STORAGE[key]),
                trueFalseKeys = convertBitNumberToTrueFalseKeys(ALL_DOT_KEYS, bitNumber)

            return trueFalseKeys

        } else if (key) {
            // Session only ever stores numerical indices. Default is 0.
            const value = WINDOW_STORAGE[key] || 0,
                finalValue = (key === SELECTED_TIME_PLAYED) ? parseFloat(value) : parseInt(value)

            return isNaN(finalValue) ? 0 : finalValue

        } else {
            return 0
        }
    }
}
