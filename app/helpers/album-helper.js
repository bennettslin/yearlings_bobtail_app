/**
 * TODO V2: If a capitalised anchor was not preceded by a period, then
 * programmatically add properNoun key to lyricObject, rather than have it
 * hard-coded the way it is now.
 */

import { ALL_DOT_KEYS,
         OVERVIEW_KEYS,
         TEXT_KEYS } from './constants.js';
import FormatHelper from './format-helper.js';

export default {

    /**
     * Temporary storage variables.
     */
    _songIndex: null,
    _songDotKeys: {},
    _annotations: [],
    _portalReferences: {},

    /**
     * Separate annotations.
     */
    prepareAlbumObject(albumObject = {}) {
        this._convertOverviews(albumObject);
        this._prepareAllSongs(albumObject);
        this._populatePortalReferences(albumObject);

        this._deleteTemporaryStorage();
    },

    _prepareAllSongs(albumObject) {
        albumObject.songs.forEach((song, songIndex) => {

            this._convertOverviews(song);

            // Song indices start at 1.
            this._songIndex = songIndex + 1;
            this._annotations = [];

            this._parseLyricValue(song.lyrics);

            // Add annotations to song object.
            song.annotations = this._annotations;

            // Add available dots to song object.
            song.dotKeys = this._songDotKeys;

            this._songDotKeys = {};
        });
    },

    _convertOverviews(object) {
        // Convert overviews object into array.
        const overviews = OVERVIEW_KEYS.map(overviewKey => {
            return object.overviews[overviewKey];
        });
        object.overviews = overviews;
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
            if (lyricValue.anchor) {
                this._prepareAnnotation(lyricValue);

            } else {
                TEXT_KEYS.forEach(textKey => {
                    if (textKey !== 'anchor' && lyricValue[textKey]) {
                        this._parseLyricValue(lyricValue[textKey]);
                    }
                });
            }
        }
    },

    _prepareAnnotation(lyricObject = {}) {

        // Create annotation object to push into annotations array.
        const annotation = {},

            // Create object to store dot keys.
            dotKeys = {};

        // Cards may be single annotation object or array of annotation objects.
        annotation.cards = lyricObject.annotation;

        // Add annotation index to lyrics. 1-based index.
        annotation.annotationIndex = this._annotations.length + 1;

        // FIXME: Not DRY!
        lyricObject.annotationIndex = annotation.annotationIndex;

        // Add formatted title to annotation.
        annotation.title = FormatHelper.getFormattedAnnotationTitle(lyricObject.anchor, lyricObject.properNoun);
        delete lyricObject.properNoun;

        /**
         * Add todo to annotation.
         */
        if (lyricObject.todo) {
            annotation.todo = lyricObject.todo;
        }

        this._storeDotKeys(annotation.cards, dotKeys);

        // Comment out for now.
        // this._storePortal(lyricObject, dotKeys);

        // Pass dot keys to both lyrics and annotation.
        lyricObject.dotKeys = dotKeys;
        annotation.dotKeys = dotKeys;

        // Add annotation object to annotations array.
        this._annotations.push(annotation);

        // Lyric object no longer needs reference to annotation.
        delete lyricObject.annotation;
    },

    _storeDotKeys(cards, dotKeys) {

        // FIXME: Should be more DRY.
        if (Array.isArray(cards)) {
            cards.forEach(card => {
                ALL_DOT_KEYS.forEach(dotKey => {
                    if (card.dotKeys && card.dotKeys[dotKey]) {
                        dotKeys[dotKey] = true;
                        this._songDotKeys[dotKey] = true;
                    }
                });
            });
        } else {

            ALL_DOT_KEYS.forEach(dotKey => {
                if (cards.dotKeys && cards.dotKeys[dotKey]) {
                    dotKeys[dotKey] = true;
                    this._songDotKeys[dotKey] = true;
                }
            });
        }
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

    _deleteTemporaryStorage() {
        delete this._songIndex;
        delete this._songDotKeys;
        delete this._annotations;
        delete this._portalReferences;
    }
}
