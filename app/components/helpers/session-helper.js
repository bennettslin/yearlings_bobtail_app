import { STORAGE } from '../constants/constants.js';

module.exports = {

    setInSession(key, value) {
        STORAGE[key] = value;
    },

    getFromSession(key) {
        if (key) {
            const stringValue = STORAGE[key],
                intValue = parseInt(stringValue);
            return isNaN(intValue) ? stringValue : intValue;

        } else {
            return 0;
        }
    }
}