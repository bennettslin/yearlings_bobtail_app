import { STORAGE, TEXT_KEYS } from './constants.js';

export default {

    logObject(description, object = STORAGE) {
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

    getLyricObjectForAnnotationIndex(annotationIndex, object, returnObject) {
        // For logging purposes.

        if (Array.isArray(object)) {
            return object.reduce((previousObject, element) => {
                return this.getLyricObjectForAnnotationIndex(annotationIndex, element, returnObject) || previousObject;
            }, null);

        } else if (typeof object === 'object') {

            // If it has an annotation index, return the parent lyric object.
            if (object.annotationIndex) {
                return object.annotationIndex === annotationIndex ? returnObject : null;
            }

            // Otherwise, keep recursing until we find the object with an annotation index.
            return TEXT_KEYS.reduce((previousObject, textKey) => {
                const currentLyricObject = (textKey.toLowerCase().indexOf('lyric') > -1) ? object[textKey] : returnObject;

                return this.getLyricObjectForAnnotationIndex(annotationIndex, object[textKey], currentLyricObject) || previousObject;
            }, null);

        } else {
            return null;
        }
    }
}
