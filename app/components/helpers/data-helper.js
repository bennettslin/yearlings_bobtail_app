module.exports = {
    /**
     * Separate annotations.
     */
    parseAlbumObject: function(albumObject = {}) {
        albumObject.songs.forEach(song => {
            let annotations = [];
            this._parseSongElement(song.lyrics, annotations);

            // Add annotations to song object.
            song.annotations = annotations;
        });
    },

    /**
     * Recurse until object with anchor key is found.
     */
    _parseSongElement: function(songElement = [], annotations) {
        if (Array.isArray(songElement)) {
            songElement.forEach(newSongElement => {
                this._parseSongElement(newSongElement, annotations);
            });

        } else if (typeof songElement === 'object') {
            if (songElement.verse) {
            this._parseSongElement(songElement.verse, annotations);

            } else if (songElement.emphasis) {
            this._parseSongElement(songElement.emphasis, annotations);

            } else if (songElement.italic) {
            this._parseSongElement(songElement.italic, annotations);

            } else if (songElement.anchor) {
                this._parseAnnotation(songElement, annotations);
            }
        }
    },

    /**
     * Add annotation index to song object with anchor key, and add annotation
     * to annotations array.
     */
    _parseAnnotation: function(songObject = {}, annotations = []) {
        // Add annotation index to song object with anchor key. 1-based index.
        songObject.annotationIndex = annotations.length + 1;

        // Add annotation object to annotations array.
        annotations.push(songObject.annotation);
    }
}