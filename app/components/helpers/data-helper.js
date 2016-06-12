/**
 * TODO V2: If a capitalised anchor was not preceded by a period, then
 * programmatically add properNoun key to lyricObject, rather than have it
 * hard-coded the way it is now.
 */

import FormatHelper from './format-helper.js';

module.exports = {
    /**
     * Separate annotations.
     */
    prepareAlbumObject(albumObject = {}) {
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
    _parseLyricElement(lyricElement = [], annotations) {
        if (Array.isArray(lyricElement)) {
            lyricElement.forEach(newLyricElement => {
                this._parseLyricElement(newLyricElement, annotations);
            });

        } else if (typeof lyricElement === 'object') {
            if (lyricElement.lyric) {
            this._parseLyricElement(lyricElement.lyric, annotations);

            } else if (lyricElement.emphasis) {
            this._parseLyricElement(lyricElement.emphasis, annotations);

            } else if (lyricElement.italic) {
            this._parseLyricElement(lyricElement.italic, annotations);

            } else if (lyricElement.anchor) {
                this._prepareAnnotation(lyricElement, annotations);
            }
        }
    },

    _prepareAnnotation(lyricObject = {}, annotations = []) {
        let title = lyricObject.anchor;

        // Add annotation index to lyrics. 1-based index.
        lyricObject.annotationIndex = annotations.length + 1;

        /**
         * Get annotation title from anchor text. Convert from object if
         * necessary, and also uncapitalise if not a proper noun.
         */
        if (typeof title === 'object') {
            title = FormatHelper.getStringFromObject(title);
        }
        if (!lyricObject.properNoun) {
            if (!FormatHelper.beginsWithPronounI(title)) {
                title = FormatHelper.getUncapitalisedText(title);
            }
        }
        lyricObject.annotation.title = title;

        // For dev purposes.
        lyricObject.todo = lyricObject.annotation.todo;

        // Both lyrics and annotation will keep reference to colour codes.
        lyricObject.codes = lyricObject.annotation.codes;

        // Add annotation object to annotations array.
        annotations.push(lyricObject.annotation);

        // Lyrics no longer needs reference to annotation.
        delete lyricObject.annotation;
    }
}