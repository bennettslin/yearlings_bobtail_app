// Store data in browser's local storage.

import { DOT_KEYS,
         ALL_DOT_KEYS,
         WINDOW_STORAGE,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from './constants'

export default {

    setInSession(key, value) {
        WINDOW_STORAGE[key] = value
    },

    getFromSession(key) {
        if (key === DOT_KEYS) {
            return WINDOW_STORAGE[key] || this._getDefaultDotKeysObject();

        } else if (key) {
            // Default is 0 unless specified otherwise.
            const defaultValue =
                    (key === OVERVIEW_INDEX ? DEFAULT_OVERVIEW_INDEX : 0),
                value = WINDOW_STORAGE[key] || defaultValue,
                intValue = parseInt(value)

            // Session only ever stores numerical indices.
            return isNaN(intValue) ? defaultValue : intValue

        } else {
            return 0
        }
    },

    _getDefaultDotKeysObject() {
        const dotKeysObject = {}
        ALL_DOT_KEYS.forEach(dotKey => {
            dotKeysObject[dotKey] = true
        })
        return JSON.stringify(dotKeysObject)
    }
}
