import Constants from '../constants/constants.js';

const storage = window.localStorage;

module.exports = {

    areObjectsEqual(objects1 = {}, objects2 = {}) {
        return (JSON.stringify(objects1) === JSON.stringify(objects2));
    },

    hasParentWithTagName(child, parentTagName = '') {
         let node = child;

         while (node !== null) {
             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    },

    logStorageObject() {
        return this._logObject('window storage', storage);
    },

    _logObject(description, object) {
        const objectString = JSON.stringify(object, null, 2),
            formattedString = objectString.replace(/"/g , '');

        return `${description}: ${formattedString}`;
    },

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