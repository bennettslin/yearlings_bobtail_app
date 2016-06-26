import Constants from '../constants/constants.js';

const storage = Constants.storage;

module.exports = {

    setInSession(key, value) {
        storage[key] = value;
    },

    getFromSession(key) {
        if (key) {
            const stringValue = storage[key],
                intValue = parseInt(stringValue);
            return isNaN(intValue) ? stringValue : intValue;

        } else {
            return 0;
        }
    }
}