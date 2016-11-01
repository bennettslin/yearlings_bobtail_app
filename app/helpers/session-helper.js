// Store data in browser's local storage.

import { SELECTED_DOT_KEYS,
         ALL_DOT_KEYS,
         WINDOW_STORAGE,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_WIKI_URL } from './constants'

// TODO: Add validation methods that return valid or default value for all, and test them! ʦ

const _getValidDotKeys = (tryValue) => {
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

const setInSession = (key, value) => {
    WINDOW_STORAGE[key] = value
}

const setDotInSession = (dotKey, isActive) => {
    const selectedDotKeys = _getValidDotKeys(WINDOW_STORAGE[SELECTED_DOT_KEYS])
    selectedDotKeys[dotKey] = isActive

    setInSession(SELECTED_DOT_KEYS, JSON.stringify(selectedDotKeys))
}

export default {
    setDotInSession,
    setInSession,

    // TODO: This currently does not allow for float times.
    getFromSession(key) {
        if (key === SELECTED_DOT_KEYS) {
            return _getValidDotKeys(WINDOW_STORAGE[key])

        } else if (key === SELECTED_WIKI_URL) {
            const defaultValue = '',
                value = WINDOW_STORAGE[key] || defaultValue

            return value

        } else if (key) {
            // Default is 0 unless specified otherwise.
            const defaultValue =
                    (key === SELECTED_WIKI_URL ? '' : 0),
                value = WINDOW_STORAGE[key] || defaultValue,
                intValue = parseInt(value)

            // Session only ever stores numerical indices.
            return isNaN(intValue) ? defaultValue : intValue

        } else {
            return 0
        }
    }
}
