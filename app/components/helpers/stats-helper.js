module.exports = {

    getAnnotationsCount: function(annotationsObject = {}) {
        return Object.keys(annotationsObject).length;
    },

    getTotalWordsInAnnotations: function(annotationsObject = {}) {
        const objectKeys = Object.keys(annotationsObject);

        return objectKeys.reduce((wordCount, objectKey) => {
            const annotation = annotationsObject[objectKey].description;

            return wordCount + this._getTotalWordsInAnnotation(annotation);

        }, 0);
    },

    _getTotalWordsInAnnotation: function(annotation = '') {
        if (annotation instanceof Array) {
            return annotation.reduce((wordCount, annotationValue) => {
                return wordCount + this._getTotalWordsInAnnotation(annotationValue);
            }, 0);

        } else if (typeof annotation === 'object') {
            // There will only ever be one of these keys.
            const possibleKeys = ['italic', 'emphasis', 'anchor'];

            return possibleKeys.reduce((wordCount, possibleKey) => {
                if (annotation[possibleKey]) {
                    return wordCount + this._getTotalWordsInAnnotation(annotation[possibleKey]);
                }

                return wordCount;
            }, 0);

        // It's a string.
        } else {
            return annotation.split(' ').length;
        }
    }
}