import Constants from '../constants/constants.js';

const storage = Constants.storage;

module.exports = {

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
    }
}