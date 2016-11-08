// Parse album data for build.

import { ALBUM_BUILD_KEYS } from './constants'
import { getFormattedAnnotationTitle } from './format-helper'

const _tempStore = {
    _songIndex: 0,
    _songDotKeys: {},
    _annotations: [],
    _annotationIndex: 0,
    _popupAnchors: [],
    _wikiIndex: 1,
    _portalLinks: {},
    _songTimes: [],
    _verseIndexCounter: 0
}

export const prepareAlbumData = (album = {}) => {
    _prepareAllSongs(album)
    _injectPortalLinks(album)

    /**
     * Add wiki indices. This needs to know the portal indices, which in turn
     * can only be determined after collecting portal links from the entire
     * album.
     */
    _addWikiAndPortalIndices(album)
}

const _addWikiAndPortalIndices = (album) => {
    album.songs.forEach((song, songIndex) => {
        _tempStore._annotations = song.annotations
        _tempStore._annotationIndex = 0

        _parseLyrics(song.lyrics, true)
    })
}

const _prepareAllSongs = (album) => {
    album.songs.forEach((song, songIndex) => {

        // Song indices start at 1.
        _tempStore._songIndex = songIndex + 1
        _tempStore._annotations = []
        _tempStore._verseIndexCounter = 0
        _tempStore._songDotKeys = {}
        _tempStore._songTimes = []

        _addTitleToLyrics(song.title, song.lyrics)
        // Do not confuse anchor key with string prototype anchor method.
        if (typeof song.title.anchor !== 'function') {
            song.title = song.title.anchor
        }
        _parseLyrics(song.lyrics)

        // Add annotations to song object.
        song.annotations = _tempStore._annotations

        // Add available dots to song object.
        song.dotKeys = _tempStore._songDotKeys

        // Add times for all verses to song object.
        song.times = _tempStore._songTimes
    })
}

const _addTitleToLyrics = (title, lyrics) => {
    // Add title object to lyrics object.
    const { annotation } = title,
        titleObject = {
            time: 0,
            lyric: title,
            isTitle: true
        }

    if (annotation) {
        title.properNoun = true
    }

    /**
     * If first unit contains a lone dot stanza, append title to unit. This is
     * always the case, actually.
     */
    if (lyrics[0][lyrics[0].length - 1].unitMap && lyrics[0].length === 1) {
        lyrics[0].unshift(titleObject)

    // Otherwise, create a new first unit that just contains the title.
    } else {
        lyrics.unshift([titleObject])
    }
}

/**
 * Recurse until object with anchor key is found.
 */
const _parseLyrics = (lyric, finalPassThrough) => {

    if (!finalPassThrough && !isNaN(lyric.time)) {
        // Add line index to lyric line object.
        lyric.verseIndex = _tempStore._verseIndexCounter

        // Add time to song times.
        _tempStore._songTimes.push(lyric.time)
        _tempStore._verseIndexCounter++
    }

    if (Array.isArray(lyric)) {
        lyric.forEach(childLyricValue => {
            _parseLyrics(childLyricValue, finalPassThrough)
        })

    } else if (typeof lyric === 'object') {
        if (lyric.anchor) {
            _prepareAnnotation(lyric, finalPassThrough)

        } else {
            ALBUM_BUILD_KEYS.forEach(textKey => {
                if (textKey !== 'anchor' && lyric[textKey]) {
                    _parseLyrics(lyric[textKey], finalPassThrough)
                }
            })
        }
    }
}

const _prepareAnnotation = (lyric = {}, finalPassThrough) => {
    const cards = lyric.annotation

    if (finalPassThrough) {
        const annotation = _tempStore._annotations[_tempStore._annotationIndex]

        _tempStore._popupAnchors = []

        if (Array.isArray(cards)) {
            cards.forEach((card, cardIndex) => {
                // Reset wikiIndex only for first card.
                _prepareCard(card, undefined, true, cardIndex === 0)
            })
        } else {
            _prepareCard(cards, undefined, true)
        }

        annotation.popupAnchors = _tempStore._popupAnchors

        // Clean up lyric object, now that it's the final pass through.
        delete lyric.annotation

        _tempStore._annotationIndex++

    } else {
        const annotationIndex = _tempStore._annotations.length + 1,
            annotation = {},
            dotKeys = {}

        // Add annotation index to annotation and lyrics. 1-based index.
        annotation.annotationIndex = annotationIndex
        lyric.annotationIndex = annotationIndex

        // Add formatted title to annotation.
        annotation.title = getFormattedAnnotationTitle(lyric.anchor, lyric.properNoun)

        // Add todo to annotation.
        if (lyric.todo) {
            annotation.todo = lyric.todo
        }

        // Cards may be single annotation card or array of cards.
        if (Array.isArray(cards)) {
            cards.forEach((card, cardIndex) => {
                _prepareCard(card, dotKeys)
                _addDotKeys(card, dotKeys)
                _addPortalLink(card, dotKeys, annotationIndex, cardIndex)
            })
        } else {
            _prepareCard(cards, dotKeys)
            _addDotKeys(cards, dotKeys)
            _addPortalLink(cards, dotKeys, annotationIndex)
        }

        annotation.cards = cards

        // Add dot keys to both lyrics and annotation.
        lyric.dotKeys = dotKeys
        annotation.dotKeys = dotKeys

        // Add annotation object to annotations array.
        _tempStore._annotations.push(annotation)

        // Clean up lyric object.
        delete lyric.properNoun
    }
}

const _parseWiki = (key, object, finalPassThrough, reset = true) => {
    /**
     * This method gets called in two places. The first time is simply to check
     * if there is a wiki key. The second is to add the wiki index.
     */
    if (finalPassThrough && reset) {
        _tempStore._popupAnchorIndex = 1
        reset = false
    }

    if (!object || typeof object !== 'object') {
        return false

    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            if (finalPassThrough) {
                return _parseWiki(key, element, finalPassThrough, reset) || keyFound
            } else {
                return keyFound || _parseWiki(key, element, finalPassThrough, reset)
            }
        }, false)

    } else {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            const hasWiki = !!object[key]

            if (finalPassThrough && !object.wikiIndex && typeof object[key] === 'string') {
                object.wikiIndex = _tempStore._popupAnchorIndex
                _tempStore._popupAnchorIndex++
                _tempStore._popupAnchors.push(object[key])
                delete object[key]
            }

            return keyFound || hasWiki || _parseWiki(key, object[currentKey], finalPassThrough, reset)
        }, false)
    }
}

const _prepareCard = (card, dotKeys, finalPassThrough, reset) => {
    const { description,
            portalLinks } = card

    // If card has a wiki link, add wiki key to dot keys.
    if (description) {
        const hasWiki = _parseWiki('wiki', description, finalPassThrough, reset)

        if (hasWiki && !finalPassThrough) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }
            card.dotKeys.wiki = true
            dotKeys.wiki = true
            _tempStore._songDotKeys.wiki = true
        }
    }

    if (portalLinks && finalPassThrough) {
        portalLinks.forEach(link => {
            link.portalIndex = _tempStore._popupAnchorIndex
            _tempStore._popupAnchors.push(_tempStore._popupAnchorIndex)
            _tempStore._popupAnchorIndex++
            delete link.cardIndex
        })
    }
}

const _addDotKeys = (card, dotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        Object.keys(card.dotKeys).forEach(dotKey => {
            dotKeys[dotKey] = true
            _tempStore._songDotKeys[dotKey] = true
        })
    }
}

const _addPortalLink = (card, dotKeys, annotationIndex, cardIndex = 0) => {
    // Add portal link to annotation card..
    const { portal } = card
    if (portal) {

        const portalLink = {
                songIndex: _tempStore._songIndex,
                annotationIndex,
                cardIndex
            }

        // If first portal link, initialise array.
        if (!_tempStore._portalLinks[portal]) {
            _tempStore._portalLinks[portal] = []
        }

        // Add portal link to portal links array.
        _tempStore._portalLinks[portal].push(portalLink)

        // Add portal key to dot keys.
        dotKeys.portal = true
        _tempStore._songDotKeys.portal = true

        // Clean up card unit.
        delete card.portal
    }
}

const _injectPortalLinks = (album) => {
    /**
     * For each annotation with a portal, add an array of links to all
     * other portals.
     */
    for (const linkKey in _tempStore._portalLinks) {
        const links = _tempStore._portalLinks[linkKey]

        links.forEach((link, index) => {
            const song = album.songs[link.songIndex - 1],
                annotation = song.annotations[link.annotationIndex - 1],
                card = Array.isArray(annotation.cards) ?
                    annotation.cards[link.cardIndex] : annotation.cards,
                portalLinks = links.filter((link, thisIndex) => {
                    return index !== thisIndex
                }).map(link => {
                    // Return a *copy* of the link object.
                    return Object.assign({}, link)
                })

            card.portalLinks = portalLinks
        })
    }
}
