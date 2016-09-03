// Store data in browser's local storage.

import { ACTIVE_DOT_KEYS,
         ALL_DOT_KEYS,
         WINDOW_STORAGE,
         ACTIVE_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from './constants'

export default {

    setDotInSession(dotKey, isActive) {
        const activeDotKeys = this._getValidDotKeys(WINDOW_STORAGE[ACTIVE_DOT_KEYS])
        activeDotKeys[dotKey] = isActive

        this.setInSession(ACTIVE_DOT_KEYS, JSON.stringify(activeDotKeys))
    },

    setInSession(key, value) {
        WINDOW_STORAGE[key] = value
    },

    // TODO: This currently does not allow for float times.
    getFromSession(key) {
        if (key === ACTIVE_DOT_KEYS) {
            return this._getValidDotKeys(WINDOW_STORAGE[key])

        } else if (key) {
            // Default is 0 unless specified otherwise.
            const defaultValue =
                    (key === ACTIVE_OVERVIEW_INDEX ? DEFAULT_OVERVIEW_INDEX : 0),
                value = WINDOW_STORAGE[key] || defaultValue,
                intValue = parseInt(value)

            // Session only ever stores numerical indices.
            return isNaN(intValue) ? defaultValue : intValue

        } else {
            return 0
        }
    },

    // TODO: Add validation methods that return valid or default value for all, and test them! ʦ

    _getValidDotKeys(tryValue) {
        // Value is a valid object.
        try {
            const dotKeysObject = JSON.parse(tryValue)
            return dotKeysObject

        // Create dot keys object from scratch, with all values true.
        } catch (e) {
            const dotKeysObject = {}
            ALL_DOT_KEYS.forEach(dotKey => {
                dotKeysObject[dotKey] = true
            })
            return dotKeysObject
        }
    }
}
