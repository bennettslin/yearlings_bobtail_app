/**
 * TODO V2: If a capitalised anchor was not preceded by a period, then
 * programmatically add properNoun key to lyricObject, rather than have it
 * hard-coded the way it is now.
 */

import Constants from '../constants/constants.js';
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
        this._prepareAllAnnotations(albumObject);
        this._populatePortalReferences(albumObject);

        this._deleteTemporaryStorage();
    },

    _prepareAllAnnotations(albumObject) {
        albumObject.songs.forEach((song, songIndex) => {

            // Song indices start at 1.
            this._songIndex = songIndex + 1;
            this._annotations = [];

            this._parseLyricValue(song.lyrics);

            // Add annotations to song object.
            song.annotations = this._annotations;
        });
    },

    _populatePortalReferences(albumObject) {
        for (const referenceKey in this._portalReferences) {
            const references = this._portalReferences[referenceKey];

            references.forEach((reference, refIndex) => {
                // Add references to all portals other than this one.
                const song = albumObject.songs[reference.songIndex - 1],
                    annotation = song.annotations[reference.annotationIndex - 1],
                    portalReferences = references.filter((reference, thisIndex) => {
                        return refIndex !== thisIndex;
                    });

                annotation.portalReferences = portalReferences;
            });
        }
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

        // Create annotation object to push into annotations array.
        const annotation = lyricObject.annotation,

            // Create object to store dot keys.
            dotKeys = {};

        // Add annotation index to lyrics. 1-based index.
        lyricObject.annotationIndex = this._annotations.length + 1;

        // Add formatted title to annotation.
        annotation.title = FormatHelper.getFormattedAnnotationTitle(lyricObject.anchor, lyricObject.properNoun);
        delete lyricObject.properNoun;

        /**
         * Add todo to annotation.
         */
        if (lyricObject.todo) {
            annotation.todo = lyricObject.todo;
        }

        this._storeDotKeys(lyricObject, dotKeys);
        this._storePortal(lyricObject, dotKeys);

        // Pass dot keys to both lyrics and annotation.
        lyricObject.dotKeys = dotKeys;
        annotation.dotKeys = dotKeys;

        // Add annotation object to annotations array.
        this._annotations.push(lyricObject.annotation);

        // Lyric object no longer needs reference to annotation.
        delete lyricObject.annotation;
    },

    _storeDotKeys(lyricObject, dotKeys) {
        Constants.allDotKeys.forEach(dotKey => {
            if (lyricObject.annotation[dotKey]) {
                dotKeys[dotKey] = true;
            }
        });
    },

    _storePortal(lyricObject, dotKeys) {
        // Store portal references and key.
        if (lyricObject.annotation.portal) {

            const portalReference = {
                songIndex: this._songIndex,
                annotationIndex: lyricObject.annotationIndex
            };

            // If first portal reference, initialise array.
            if (!this._portalReferences[lyricObject.portal]) {
                this._portalReferences[lyricObject.portal] = [];
            }

            this._portalReferences[lyricObject.portal].push(portalReference);

            // Add to dot keys object.
            dotKeys.portal = true;
        }
    },

    _deleteTemporaryStorage() {
        delete this._songIndex;
        delete this._annotations;
        delete this._portalReferences;
    }
}