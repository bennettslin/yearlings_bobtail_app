// Parse album data for build.

import { ALBUM_BUILD_KEYS } from './constants'
import { getFormattedAnnotationTitle } from './format-helper'

const _tempStore = {
    _songIndex: 0,
    _songDotKeys: {},
    _annotations: [],
    _popupAnchors: [],
    _wikiIndex: 1,
    _portalLinks: {},
    _songTimes: [],
    _lastVerseObject: {},
    _verseIndexCounter: 0
}

export const prepareAlbumData = (album = {}) => {
    // _convertOverviews(album)
    _prepareAllSongs(album)
    _injectPortalLinks(album)
}

const _prepareAllSongs = (album) => {
    album.songs.forEach((song, songIndex) => {

        // _convertOverviews(song)

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

        // Make last line's next time the song's total time and add line index.
        _tempStore._lastVerseObject.nextTime = song.totalTime
        _tempStore._lastVerseObject.verseIndex = _tempStore._verseIndexCounter

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
     * If first unit contains a lone dot stanza, append title to unit. TODO:
     * There might turn out to be no instances where this is ever the case.
     */
    if (lyrics[0][lyrics[0].length - 1].unitMap && lyrics[0].length === 1) {
        lyrics[0].unshift(titleObject)

    // Otherwise, create a new first unit that just contains the title.
    } else {
        lyrics.unshift([titleObject])
    }

    // Store so that next line object can add its time as nextTime.
    _tempStore._lastVerseObject = lyrics[0][0]
}

/**
 * Recurse until object with anchor key is found.
 */
const _parseLyrics = (lyric) => {
    /**
     * If line object has time, add it as nextTime to the last line object,
     * then replace it as the last line object. Also add line index.
     */
    if (!isNaN(lyric.time)) {
        // Add line index to lyric line object.
        lyric.verseIndex = _tempStore._verseIndexCounter
        _tempStore._songTimes.push(lyric.time)

        _tempStore._lastVerseObject.verseIndex = _tempStore._verseIndexCounter
        _tempStore._verseIndexCounter++
        _tempStore._lastVerseObject.nextTime = lyric.time
        _tempStore._lastVerseObject = lyric
    }

    if (Array.isArray(lyric)) {
        lyric.forEach(childLyricValue => {
            _parseLyrics(childLyricValue)
        })

    } else if (typeof lyric === 'object') {
        if (lyric.anchor) {
            _prepareAnnotation(lyric)

        } else {
            ALBUM_BUILD_KEYS.forEach(textKey => {
                if (textKey !== 'anchor' && lyric[textKey]) {
                    _parseLyrics(lyric[textKey])
                }
            })
        }
    }
}

const _prepareAnnotation = (lyric = {}, annotation = {}, dotKeys = {}) => {
    const annotationIndex = _tempStore._annotations.length + 1,
        cards = lyric.annotation

    // Add annotation index to annotation and lyrics. 1-based index.
    annotation.annotationIndex = annotationIndex
    lyric.annotationIndex = annotationIndex

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(lyric.anchor, lyric.properNoun)

    // Add todo to annotation.
    if (lyric.todo) {
        annotation.todo = lyric.todo
    }

    _tempStore._popupAnchors = []

    // Cards may be single annotation card or array of cards.
    if (Array.isArray(cards)) {
        cards.forEach((card, cardIndex) => {
            _prepareWikis(card, dotKeys)
            _addDotKeys(card, dotKeys)
            _addPortalLink(card, dotKeys, annotationIndex, cardIndex)
        })
    } else {
        _prepareWikis(cards, dotKeys)
        _addDotKeys(cards, dotKeys)
        _addPortalLink(cards, dotKeys, annotationIndex)
    }

    annotation.cards = cards
    annotation.popupAnchors = _tempStore._popupAnchors

    // Add dot keys to both lyrics and annotation.
    lyric.dotKeys = dotKeys
    annotation.dotKeys = dotKeys

    // Add annotation object to annotations array.
    _tempStore._annotations.push(annotation)

    // Clean up line object.
    delete lyric.annotation
    delete lyric.properNoun
}

const _addWikiIndexIfFound = (key, object, reset = true) => {
    if (reset) {
        _tempStore._wikiIndex = 1
        reset = false
    }

    if (!object || typeof object !== 'object') {
        return false

    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            return _addWikiIndexIfFound(key, element, reset) || keyFound
        }, false)

    } else {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            const hasWiki = !!object[key]

            if (!object.wikiIndex && typeof object[key] === 'string') {
                object.wikiIndex = _tempStore._wikiIndex
                _tempStore._wikiIndex++
                _tempStore._popupAnchors.push(object[key])
                delete object[key]
            }

            return keyFound || hasWiki || _addWikiIndexIfFound(key, object[currentKey], reset)
        }, false)
    }
}

const _prepareWikis = (card, dotKeys) => {
    const { description } = card

    // If card has a wiki link, add wiki key to dot keys.
    if (description) {
        const hasWiki = _addWikiIndexIfFound('wiki', description, 'wikiIndex')
        if (hasWiki) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }
            card.dotKeys.wiki = true
            dotKeys.wiki = true
            _tempStore._songDotKeys.wiki = true
        }
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

        // Add portalIndex to popupAnchors array.
        _tempStore._popupAnchors.push({ portalIndex: _tempStore._popupAnchors.length })

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
                })

            card.portalLinks = portalLinks
        })
    }
}
