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

        // Add annotation index to lyrics. 1-based index.
        lyricObject.annotationIndex = this._annotations.length + 1;

        // Add formatted annotation title.
        lyricObject.annotation.title = FormatHelper.getFormattedAnnotationTitle(lyricObject.anchor, lyricObject.properNoun);
        delete lyricObject.properNoun;

        /**
         * Add todo and codes to annotation.
         */
        if (lyricObject.todo) {
            lyricObject.annotation.todo = lyricObject.todo;
        }

        // FIXME: Eventually all lyric objects will have code objects.
        if (!lyricObject.codes) {
            lyricObject.codes = {};
        }

        // If there is a portal, add to code object.
        if (lyricObject.portalKey) {
            lyricObject.codes.portal = true;
        }
        lyricObject.annotation.codes = lyricObject.codes;

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

    _deleteTemporaryStorage() {
        delete this._songIndex;
        delete this._annotations;
        delete this._portalReferences;
    }
}