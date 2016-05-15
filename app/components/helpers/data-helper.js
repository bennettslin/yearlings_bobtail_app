module.exports = {
    /**
     * Separate annotations.
     */
    prepareAlbumObject: function(albumObject = {}) {
        albumObject.songs.forEach(song => {
            let annotations = [];
            this._parseLyricElement(song.lyrics, annotations);

            // Add annotations to song object.
            song.annotations = annotations;
        });
    },

    /**
     * Recurse until object with anchor key is found.
     */
    _parseLyricElement: function(lyricElement = [], annotations) {
        if (Array.isArray(lyricElement)) {
            lyricElement.forEach(newLyricElement => {
                this._parseLyricElement(newLyricElement, annotations);
            });

        } else if (typeof lyricElement === 'object') {
            if (lyricElement.verse) {
            this._parseLyricElement(lyricElement.verse, annotations);

            } else if (lyricElement.emphasis) {
            this._parseLyricElement(lyricElement.emphasis, annotations);

            } else if (lyricElement.italic) {
            this._parseLyricElement(lyricElement.italic, annotations);

            } else if (lyricElement.anchor) {
                this._prepareAnnotation(lyricElement, annotations);
            }
        }
    },

    /**
     * Add annotation index to song object with anchor key, and add annotation
     * to annotations array.
     */
    _prepareAnnotation: function(lyricElement = {}, annotations = []) {
        // Add annotation index to lyrics. 1-based index.
        lyricElement.annotationIndex = annotations.length + 1;

        // Add anchor text to annotation object.
        lyricElement.annotation.anchor = lyricElement.anchor;

        // TODO: For dev purposes.
        lyricElement.todo = lyricElement.annotation.todo;

        // Add annotation object to annotations array.
        annotations.push(lyricElement.annotation);

        // Both lyrics and annotation will keep reference to colour codes.
        lyricElement.codes = lyricElement.annotation.codes;

        // Lyrics no longer needs reference to annotation.
        delete lyricElement.annotation;
    }
}