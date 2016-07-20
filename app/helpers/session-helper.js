import { WINDOW_STORAGE,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from './constants.js';

export default {

    setInSession(key, value) {
        WINDOW_STORAGE[key] = value;
    },

    getFromSession(key) {
        if (key) {
            // Default is 0 unless specified otherwise.
            const defaultValue =
                    (key === OVERVIEW_INDEX ? DEFAULT_OVERVIEW_INDEX : 0),
                value = WINDOW_STORAGE[key] || defaultValue,
                intValue = parseInt(value);

            // Session only ever stores numerical indices.
            return isNaN(intValue) ? defaultValue : intValue;

        } else {
            return 0;
        }
    }
}
