/**
 * Helper methods for getting and setting state persisted in user's local
 * storage. Only parses to number, does not validate.
 */
import { convertBitNumberToTrueFalseKeys,
         setNewValueInBitNumber } from './bit-helper'

import { ALL_DOT_KEYS } from '../constants/dots'
import { SELECTED_DOT_KEYS,
         SELECTED_TIME_PLAYED,
         WINDOW_STORAGE } from '../constants/state'

const _getParsedValueForKey = (key) => {
    const rawValue = WINDOW_STORAGE[key],

    // All values should be integers, except selected time played.
    parsedValue = key === SELECTED_TIME_PLAYED ?
        parseFloat(rawValue) : parseInt(rawValue),

    isNumber = !isNaN(parsedValue)

    /**
     * If value is not a number, select and persist the default value of 0 for
     * all other keys but selected dot keys.
     */
    if (!isNumber) {

        const defaultValue =

            // TODO: Decide default for selected dot keys.
            key === SELECTED_DOT_KEYS ? 7 : 0

        return defaultValue

    } else {
        return parsedValue
    }
}

const getFromStorage = (key) => {
    const value = _getParsedValueForKey(key)

    // Get true-false object from bit number.
    if (key === SELECTED_DOT_KEYS) {
        const bitNumber = value,
            trueFalseKeys = convertBitNumberToTrueFalseKeys({
                keysArray: ALL_DOT_KEYS,
                bitNumber
            })

        return trueFalseKeys

    } else {
        return value
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

export default {
    getFromStorage,
    setInStorage,
    setDotInStorage
}
