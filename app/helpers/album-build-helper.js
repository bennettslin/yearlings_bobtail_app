// Parse album data for build.

import { OVERVIEW_KEYS,
         ALBUM_BUILD_KEYS } from './constants'
import { getFormattedAnnotationTitle } from './format-helper'
import { findKeyInObject } from './general-helper'

const _tempStore = {
    songIndex: 0,
    songDotKeys: {},
    annotations: [],
    portalLinks: {},
    lastLyricObject: {}
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

        // Make last verse's next time the song's total time.
        _tempStore.lastLyricObject.nextTime = song.totalTime

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
        annotation.dotKeys = { title: true }
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

    // Store so that next lyric object can add its time as nextTime.
    _tempStore.lastLyricObject = lyrics[0][0]
}

/**
 * Recurse until object with anchor key is found.
 */
const _parseLyrics = (lyric) => {
    /**
     * If lyric object has time, add it as nextTime to the last lyric object,
     * then replace it as the last lyric object.
     */
    if (!isNaN(lyric.time)) {
        _tempStore.lastLyricObject.nextTime = lyric.time
        _tempStore.lastLyricObject = lyric
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
