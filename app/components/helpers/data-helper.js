/**
 * TODO V2: If a capitalised anchor was not preceded by a period, then
 * programmatically add properNoun key to lyricObject, rather than have it
 * hard-coded the way it is now.
 */

import FormatHelper from './format-helper.js';

module.exports = {

    /**
     * Temporary storage variables.
     */
    _songIndex: null,
    _annotations: [],
    _portalReferences: {},

    /**
     * Separate annotations.
     */
    prepareAlbumObject(albumObject = {}) {

        // For data helper, song indices start at 0.
        albumObject.songs.forEach((song, songIndex) => {

            this._songIndex = songIndex;
            this._annotations = [];

            this._parseLyricValue(song.lyrics);

            // Add annotations to song object.
            song.annotations = this._annotations;
        });

        this._prepareAllAnchorReferences(albumObject);

        delete this._portalReferences;
    },

    /**
     * Recurse until object with anchor key is found.
     */
    _parseLyricValue(lyricValue) {
        if (Array.isArray(lyricValue)) {
            lyricValue.forEach(childLyricValue => {
                this._parseLyricValue(childLyricValue);
            });

        } else if (typeof lyricValue === 'object') {
            if (lyricValue.lyric) {
            this._parseLyricValue(lyricValue.lyric);

            } else if (lyricValue.emphasis) {
            this._parseLyricValue(lyricValue.emphasis);

            } else if (lyricValue.italic) {
            this._parseLyricValue(lyricValue.italic);

            } else if (lyricValue.anchor) {
                this._prepareAnnotation(lyricValue);
            }
        }
    },

    _prepareAnnotation(lyricObject = {}) {
        let title = lyricObject.anchor;

        // Add annotation index to lyrics. 0-based index.
        lyricObject.annotationIndex = this._annotations.length + 1;

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
        } else {
            delete lyricObject.properNoun;
        }

        lyricObject.annotation.title = title;

        /**
         * Add todo to annotation object for stats helper. Also keep in lyric
         * object for format utility.
         */
        if (lyricObject.todo) {
            lyricObject.annotation.todo = lyricObject.todo;
        }

        this._storePortalReference(lyricObject);

        // Add annotation object to annotations array.
        this._annotations.push(lyricObject.annotation);

        // Lyrics no longer needs reference to annotation.
        delete lyricObject.annotation;
    },

    _storePortalReference(lyricObject) {
        // Store data for portal.
        if (lyricObject.portalKey) {

            const portalReference = {
                songIndex: this._songIndex,
                annotationIndex: lyricObject.annotationIndex
            };

            // If first portal reference, initialise array.
            if (!this._portalReferences[lyricObject.portalKey]) {
                this._portalReferences[lyricObject.portalKey] = [];
            }

            this._portalReferences[lyricObject.portalKey].push(portalReference);
        }
    },

    _prepareAllAnchorReferences(albumObject) {
        for (const referenceKey in this._portalReferences) {
            const references = this._portalReferences[referenceKey];

            references.forEach((reference, refIndex) => {
                const nextRefIndex = (refIndex + 1) % references.length,
                    song = albumObject.songs[reference.songIndex],
                    annotation = song.annotations[reference.annotationIndex - 1];

                annotation.portalReference = references[nextRefIndex];
            });
        }
    },
}