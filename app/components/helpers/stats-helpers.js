module.exports = {

    getTotalWordsInAnnotations: function(annotationsObject) {
        var objectKeys = Object.keys(annotationsObject);

        return objectKeys.reduce(function(wordCount, objectKey) {
            var annotation = annotationsObject[objectKey].description;

            return wordCount + this._getTotalWordsInAnnotation(annotation);

        }.bind(this), 0);
    },

    _getTotalWordsInAnnotation: function(annotation) {
        if (annotation instanceof Array) {
            return annotation.reduce(function(wordCount, annotationValue) {
                return wordCount + this._getTotalWordsInAnnotation(annotationValue);
            }.bind(this), 0);

        } else if (typeof annotation === 'object') {
            // There will only ever be one of these keys.
            var possibleKeys = ['italic', 'emphasis', 'anchor'];

            return possibleKeys.reduce(function(wordCount, possibleKey) {
                if (annotation[possibleKey]) {
                    return wordCount + this._getTotalWordsInAnnotation(annotation[possibleKey]);
                }

                return wordCount;
            }.bind(this), 0);

        // It's a string.
        } else {
            return annotation.length;
        }
    }
}