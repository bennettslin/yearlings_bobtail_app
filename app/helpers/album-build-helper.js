// Parse album data for build.

import { OVERVIEW_KEYS,
         LYRIC_TEXT_KEYS } from './constants'
import { getFormattedAnnotationTitle } from './format-helper'
import { findKeyInObject } from './general-helper'

const _tempStore = {
    songIndex: 0,
    songDotKeys: {},
    annotations: [],
    portalLinks: {}
}

export const prepareAlbumData = (album = {}) => {
    _convertOverviews(album)
    _prepareAllSongs(album)
    _injectPortalLinks(album)
}

const _prepareAllSongs = (album) => {
    album.songs.forEach((song, songIndex) => {

        _convertOverviews(song)

        // Song indices start at 1.
        _tempStore.songIndex = songIndex + 1
        _tempStore.annotations = []

        _addTitleToLyrics(song.title, song.lyrics)
        const anchor = song.title.anchor
        song.title = anchor
        _parseLyrics(song.lyrics)

        // Add annotations to song object.
        song.annotations = _tempStore.annotations

        // Add available dots to song object.
        song.dotKeys = _tempStore.songDotKeys

        _tempStore.songDotKeys = {}
    })
}

const _convertOverviews = (object) => {
    // Convert overviews object into array.
    const overviews = OVERVIEW_KEYS.map(overviewKey => {
        return object.overviews[overviewKey]
    })
    object.overviews = overviews
}

/**
 * Add title object as if it is the first unit of the lyrics object.
 */
const _addTitleToLyrics = (title, lyrics) => {
    const { annotation } = title
    if (annotation) {
        title.properNoun = true
        annotation.dotKeys = { title: true }
    }
    lyrics.unshift([{
        lyric: title,
        isTitle: true
    }])
}

/**
 * Recurse until object with anchor key is found.
 */
const _parseLyrics = (lyrics) => {
    if (Array.isArray(lyrics)) {
        lyrics.forEach(childLyricValue => {
            _parseLyrics(childLyricValue)
        })

    } else if (typeof lyrics === 'object') {
        if (lyrics.anchor) {
            _prepareAnnotation(lyrics)

        } else {
            LYRIC_TEXT_KEYS.forEach(textKey => {
                if (textKey !== 'anchor' && lyrics[textKey]) {
                    _parseLyrics(lyrics[textKey])
                }
            })
        }
    }
}

const _prepareAnnotation = (lyric = {}, annotation = {}, dotKeys = {}) => {
    const annotationIndex = _tempStore.annotations.length + 1,
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

    // Cards may be single annotation card or array of cards.
    if (Array.isArray(cards)) {
        cards.forEach((card, cardIndex) => {
            _addWikiToDots(card, dotKeys)
            _addDotKeys(card, dotKeys)
            _addPortalLink(card, dotKeys, annotationIndex, cardIndex)
        })
    } else {
        _addWikiToDots(cards, dotKeys)
        _addDotKeys(cards, dotKeys)
        _addPortalLink(cards, dotKeys, annotationIndex)
    }
    annotation.cards = cards

    // Add dot keys to both lyrics and annotation.
    lyric.dotKeys = dotKeys
    annotation.dotKeys = dotKeys

    // Add annotation object to annotations array.
    _tempStore.annotations.push(annotation)

    // Clean up lyric object.
    delete lyric.annotation
    delete lyric.properNoun
}

const _addWikiToDots = (card, dotKeys) => {
    // If card has a wiki link, add wiki key to dot keys.
    if (card.description) {
        const hasWiki = findKeyInObject('wiki', card.description)
        if (hasWiki) {
            if (!card.dotKeys) {
                card.dotKeys = {}
            }
            card.dotKeys.wiki = true
            dotKeys.wiki = true
            _tempStore.songDotKeys.wiki = true
        }
    }
}

const _addDotKeys = (card, dotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        Object.keys(card.dotKeys).forEach(dotKey => {
            dotKeys[dotKey] = true
            _tempStore.songDotKeys[dotKey] = true
        })
    }
}

const _addPortalLink = (card, dotKeys, annotationIndex, cardIndex = 0) => {
    // Add portal link to annotation card..
    const { portal } = card
    if (portal) {

        const portalLink = {
            songIndex: _tempStore.songIndex,
            annotationIndex,
            cardIndex
        }

        // If first portal link, initialise array.
        if (!_tempStore.portalLinks[portal]) {
            _tempStore.portalLinks[portal] = []
        }

        // Add portal link to portal links array.
        _tempStore.portalLinks[portal].push(portalLink)

        // Add portal key to dot keys.
        dotKeys.portal = true
        _tempStore.songDotKeys.portal = true

        // Clean up card unit.
        delete card.portal
    }
}

const _injectPortalLinks = (album) => {
    /**
     * For each annotation with a portal, add an array of links to all
     * other portals.
     */
    for (const linkKey in _tempStore.portalLinks) {
        const links = _tempStore.portalLinks[linkKey]

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
