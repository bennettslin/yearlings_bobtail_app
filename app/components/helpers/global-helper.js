import Constants from '../constants/constants.js';

const storage = window.localStorage;

module.exports = {

    areObjectsEqual(objects1 = {}, objects2 = {}) {
        // For task purposes.
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

    getLyricObjectForAnnotationIndex(annotationIndex, object, lyricObject) {
        // For logging purposes.

        if (Array.isArray(object)) {
            return object.reduce((previousReturnObject, element) => {
                return this.getLyricObjectForAnnotationIndex(annotationIndex, element, lyricObject) || previousReturnObject;
            }, null);

        } else if (typeof object === 'object') {
            /**
             * If there is no lyric object, then we are in a parent object that
             * contains the lyric object.
             */
            if (!lyricObject) {
                return this.getLyricObjectForAnnotationIndex(annotationIndex, object.lyric, object.lyric);

            // Otherwise, we are now in the lyric object.
            } else {
                return object.annotationIndex === annotationIndex ? object : null;
            }

        } else {
            return null;
        }
    },

    logObject(description, object = storage) {
        const formattedString = JSON.stringify(object, null, 3);

        // TODO: Prettify JSON string?

            // // Remove quote before key.
            // .replace(new RegExp('  "', 'g'), '  ')

            // // Remove quote after key.
            // .replace(new RegExp('":', 'g'), ':')

            // // Remove backslash before quote.
            // .replace(new RegExp('\\\\"', 'g'), '"');

        console.info(`${description}: ${formattedString}`);
        return true;
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