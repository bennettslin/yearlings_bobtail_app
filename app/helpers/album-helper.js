/**
 * TODO V2: If a capitalised anchor was not preceded by a period, then
 * programmatically add properNoun key to lyric, rather than have it
 * hard-coded the way it is now.
 */

import { OVERVIEW_KEYS,
         TEXT_KEYS } from './constants.js';
import FormatHelper from './format-helper.js';
import GeneralHelper from './general-helper.js';

export default {

     // Temporary storage variables.
    _songIndex: null,
    _songDotKeys: {},
    _annotations: [],
    _portalLinks: {},

    prepareAlbum(album = {}) {
        this._convertOverviews(album);
        this._prepareAllSongs(album);
        this._injectPortalLinks(album);

        this._deleteTemporaryStorage();
    },

    _prepareAllSongs(album) {
        album.songs.forEach((song, songIndex) => {

            this._convertOverviews(song);

            // Song indices start at 1.
            this._songIndex = songIndex + 1;
            this._annotations = [];

            this._parseLyrics(song.lyrics);

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
    _parseLyrics(lyrics) {
        if (Array.isArray(lyrics)) {
            lyrics.forEach(childLyricValue => {
                this._parseLyrics(childLyricValue);
            });

        } else if (typeof lyrics === 'object') {
            if (lyrics.anchor) {
                this._prepareAnnotation(lyrics);

            } else {
                TEXT_KEYS.forEach(textKey => {
                    if (textKey !== 'anchor' && lyrics[textKey]) {
                        this._parseLyrics(lyrics[textKey]);
                    }
                });
            }
        }
    },

    _prepareAnnotation(lyric = {}, annotation = {}, dotKeys = {}) {
        const annotationIndex = this._annotations.length + 1,
            cards = lyric.annotation;

        // Add annotation index to annotation and lyrics. 1-based index.
        annotation.annotationIndex = annotationIndex;
        lyric.annotationIndex = annotationIndex;

        // Add formatted title to annotation.
        annotation.title = FormatHelper.getFormattedAnnotationTitle(lyric.anchor, lyric.properNoun);

        // Add todo to annotation.
        if (lyric.todo) {
            annotation.todo = lyric.todo;
        }

        // Cards may be single annotation card or array of cards.
        if (Array.isArray(cards)) {
            cards.forEach(card => {
                this._addWikiToDots(card, dotKeys);
                this._addDotKeys(card, dotKeys);
                this._addPortalLink(card, annotationIndex, dotKeys);
            });
        } else {
            this._addWikiToDots(cards, dotKeys);
            this._addDotKeys(cards, dotKeys);
            this._addPortalLink(cards, annotationIndex, dotKeys);
        }
        annotation.cards = cards;

        // Add dot keys to both lyrics and annotation.
        lyric.dotKeys = dotKeys;
        annotation.dotKeys = dotKeys;

        // Add annotation object to annotations array.
        this._annotations.push(annotation);

        // Clean up lyric object.
        delete lyric.annotation;
        delete lyric.properNoun;
    },

    _addWikiToDots(card, dotKeys) {
        // If card has a wiki link, add wiki key to dot keys.
        if (card.description) {
            const hasWiki = GeneralHelper.findKeyInObject('wiki', card.description);
            if (hasWiki) {
                if (!card.dotKeys) {
                    card.dotKeys = {};
                }
                card.dotKeys.wiki = true;
                dotKeys.wiki = true;
                this._songDotKeys.wiki = true;
            }
        }
    },

    _addDotKeys(card, dotKeys) {
        // Add dot keys to both song and annotation card.
        if (card.dotKeys) {
            Object.keys(card.dotKeys).forEach(dotKey => {
                dotKeys[dotKey] = true;
                this._songDotKeys[dotKey] = true;
            });
        }
    },

    _addPortalLink(card, annotationIndex, dotKeys) {
        // Add portal link to annotation.
        // FIXME: If portal is under card, shouldn't portal link also be under card?

        const { portal } = card;
        if (portal) {

            const portalLink = {
                songIndex: this._songIndex,
                annotationIndex
            };

            // If first portal link, initialise array.
            if (!this._portalLinks[portal]) {
                this._portalLinks[portal] = [];
            }

            // Add portal link to portal links array.
            this._portalLinks[portal].push(portalLink);

            // Add portal key to dot keys.
            dotKeys.portal = true;
            this._songDotKeys.portal = true;

            // Clean up card unit.
            delete card.portal;
        }
    },

    _injectPortalLinks(album) {
        /**
         * For each annotation with a portal, add an array of links to all
         * other portals.
         */
        for (const linkKey in this._portalLinks) {
            const links = this._portalLinks[linkKey];

            links.forEach((link, refIndex) => {
                const song = album.songs[link.songIndex - 1],
                    annotation = song.annotations[link.annotationIndex - 1],
                    portalLinks = links.filter((link, thisIndex) => {
                        return refIndex !== thisIndex;
                    });

                annotation.portalLinks = portalLinks;
            });
        }
    },

    _deleteTemporaryStorage() {
        delete this._songIndex;
        delete this._songDotKeys;
        delete this._annotations;
        delete this._portalLinks;
    }
}
