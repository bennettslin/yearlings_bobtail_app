// Parse album data for build.

import { ALBUM_BUILD_KEYS,
         LYRIC,
         LEFT,
         RIGHT } from './constants'
import { getFormattedAnnotationTitle } from './format-helper'
import { getAnnotationsDotKeys } from 'helpers/album-view-helper'

const _tempStore = {
    _songIndex: 0,
    _songDotKeys: {},
    _annotations: [],
    _popupAnchors: [],
    _wikiIndex: 1,
    _portalLinks: {},
    _songTimes: [],
    _verseIndexCounter: 0,
    _currentAnnotationIndices: [],
    _firstRightAnnotationIndexOfVerse: 0,
    _finalAnnotationIndex: 0,
}

export const prepareAlbumData = (album = {}) => {
    _prepareAllSongs(album)
    _injectPortalLinks(album)

    /**
     * Add wiki and portal indices. These can only be determined after
     * collecting portal links from the entire album.
     */
    _addWikiAndPortalIndices(album)
}

const _addWikiAndPortalIndices = (album) => {
    album.songs.forEach((song, songIndex) => {
        _tempStore._annotations = song.annotations
        _tempStore._finalAnnotationIndex = 0

        _parseLyrics(song.lyrics, true)
    })
}

const _markSideStanzas = (lyrics) => {
    lyrics.forEach(stanza => {
        const hasSideStanzas = stanza.reduce((hasSideStanzas, verse) => {
            return hasSideStanzas || !!verse.topSideStanza || !!verse.bottomSideStanza
        }, false)

        if (hasSideStanzas) {
            stanza.forEach(verse => {
                if (verse.topSideStanza || verse.bottomSideStanza) {
                    verse.rightColumn = true
                } else {
                    verse.leftColumn = true
                }
            })
        }
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
        _tempStore._currentAnnotationIndices = []
        _tempStore._firstRightAnnotationIndexOfVerse = 0

        _addTitleToLyrics(song.title, song.lyrics)
        // Do not confuse anchor key with string prototype anchor method.
        if (typeof song.title.anchor !== 'function') {
            song.title = song.title.anchor
        }

        _markSideStanzas(song.lyrics)
        _parseLyrics(song.lyrics)

        // Add annotations to song object.
        song.annotations = _tempStore._annotations
        song.annotationsDotKeys = getAnnotationsDotKeys({ selectedSong: song })

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
const _parseLyrics = (lyric, finalPassThrough, textKey) => {

    if (!finalPassThrough && !isNaN(lyric.time)) {
        // Add verse index to lyric object.
        lyric.verseIndex = _tempStore._verseIndexCounter

        // Add last annotation index.
        lyric.lastAnnotationIndex = _tempStore._annotations.length

        // Add time to song times.
        _tempStore._songTimes.push(lyric.time)
    }

    if (Array.isArray(lyric)) {
        lyric.forEach(childLyricValue => {
            _parseLyrics(childLyricValue, finalPassThrough, textKey)
        })

    } else if (typeof lyric === 'object') {
        if (lyric.anchor) {
            _prepareAnnotation(lyric, finalPassThrough, textKey)

        } else {
            ALBUM_BUILD_KEYS.forEach(childTextKey => {
                if (childTextKey !== 'anchor' && lyric[childTextKey]) {
                    let sideStanzaTextKey

                    if (lyric.leftColumn) {
                        sideStanzaTextKey = 'leftColumn'
                    } else if (lyric.rightColumn) {
                        sideStanzaTextKey = 'rightColumn'
                    }

                    _parseLyrics(lyric[childTextKey], finalPassThrough, (textKey || sideStanzaTextKey || childTextKey))
                }
            })
        }
    }

    if (!isNaN(lyric.time)) {
        // Increment counter here to allow annotation to get correct verseIndex.
        _tempStore._verseIndexCounter++
    }

    // Doublespeaker lyrics have separate keys for each column.
    if (lyric[LYRIC] || lyric[LEFT] || lyric[RIGHT] || lyric.dotStanza) {
        // Add first annotation index of verse, if any.
        if (_tempStore._currentAnnotationIndices.length) {
            // Last annotation index is no longer needed.
            delete lyric.lastAnnotationIndex

            lyric.currentAnnotationIndices = _tempStore._currentAnnotationIndices

            _tempStore._currentAnnotationIndices = []
        }
    }
}

const _prepareAnnotation = (lyric = {}, finalPassThrough, textKey) => {
    const cards = lyric.annotation

    if (finalPassThrough) {
        const annotation = _tempStore._annotations[_tempStore._finalAnnotationIndex]

        _tempStore._popupAnchors = []
        _tempStore._popupAnchorIndex = 1

        if (Array.isArray(cards)) {
            cards.forEach((card, cardIndex) => {
                _prepareCard(card, undefined, true)
            })
        } else {
            _prepareCard(cards, undefined, true)
        }

        annotation.popupAnchors = _tempStore._popupAnchors

        // Clean up lyric object, now that it's the final pass through.
        delete lyric.annotation

        _tempStore._finalAnnotationIndex++

    } else {
        const annotationIndex = _tempStore._annotations.length + 1,
            annotation = {},
            dotKeys = {}

        _tempStore._currentAnnotationIndices.push(annotationIndex)

        // Add annotation index to annotation and lyrics. 1-based index.
        annotation.annotationIndex = annotationIndex
        annotation.verseIndex = _tempStore._verseIndexCounter

        // Let annotation know if it's in a doublespeaker column.
        if (textKey === LEFT || textKey === 'leftColumn') {
            annotation.column = LEFT
        } else if (textKey === RIGHT || textKey === 'rightColumn') {
            annotation.column = RIGHT
        }

        lyric.annotationIndex = annotationIndex

        // Add formatted title to annotation.
        annotation.title = getFormattedAnnotationTitle(lyric.anchor, lyric.properNoun, lyric.keepEndCharacter)

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

const _prepareCard = (card, dotKeys, finalPassThrough) => {
    const { description,
            portalLinks } = card

    // If card has a wiki link, add wiki key to dot keys.
    if (description) {
        const hasWiki = _parseWiki('wiki', description, finalPassThrough)

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
            delete link.cardIndex
            _tempStore._popupAnchors.push(Object.assign({}, link))
            link.portalIndex = _tempStore._popupAnchorIndex
            _tempStore._popupAnchorIndex++
        })
    }
}

const _parseWiki = (key, object, finalPassThrough) => {
    /**
     * This method gets called in two places. The first time is simply to check
     * if there is a wiki key. The second is in the final pass through, to add
     * the wiki index.
     */

    if (!object || typeof object !== 'object') {
        return false

    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            if (finalPassThrough) {
                return _parseWiki(key, element, finalPassThrough) || keyFound
            } else {
                return keyFound || _parseWiki(key, element, finalPassThrough)
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

            return keyFound || hasWiki || _parseWiki(key, object[currentKey], finalPassThrough)
        }, false)
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
