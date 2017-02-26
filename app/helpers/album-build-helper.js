// Parse album data for build.

import { ALBUM_BUILD_KEYS,
         LYRIC,
         LEFT,
         RIGHT,
         CENTRE,
         REFERENCE } from './constants'
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
    _currentStanzaType: null,
    // _currentSongStanzaTimes: [],
    // _currentSongStanzaTypeCounters: {},
    _verseIndexCounter: -1,
    _currentAnnotationIndices: [],
    _drawingCharacters: {},
    _firstRightAnnotationIndexOfVerse: 0,
    _finalAnnotationIndex: 0,
    _hasSideStanzas: false,
    _isDoublespeaker: false,
    _lyricInTime: false,
    _dotStanzaCounter: 0,
}

export const prepareAlbumData = (album = {}) => {
    _initialPrepareAllSongs(album)

    _injectPortalLinks(album)

    _finalPrepareAllSongs(album)

    // Add drawing characters for admin purposes.
    album.drawingCharacters = parseDrawings(_tempStore._drawingCharacters)

    // FIXME: Temporarily add portal links to album for debugging purposes.
    album.portalLinks = _tempStore._portalLinks
}

const _markSideStanzas = (lyrics) => {
    lyrics.forEach(stanza => {
        const hasSideStanzas = stanza.reduce((hasSideStanzas, verse) => {
            return hasSideStanzas || !!verse.topSideStanza || !!verse.bottomSideStanza
        }, false)

        if (hasSideStanzas) {
            _tempStore._hasSideStanzas = true
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

const _initialPrepareAllSongs = (album) => {
    album.songs.forEach((song, songIndex) => {

        if (!song.logue) {
            // Song indices start at 1.
            _tempStore._songIndex = songIndex
            _tempStore._annotations = []
            _tempStore._verseIndexCounter = -1
            _tempStore._songDotKeys = {}
            _tempStore._songTimes = []
            _tempStore._currentAnnotationIndices = []
            _tempStore._firstRightAnnotationIndexOfVerse = 0
            _tempStore._hasSideStanzas = false
            _tempStore._isDoublespeaker = false
            _tempStore._dotStanzaCounter = 0
            _tempStore._currentStanzaType = null
            // _tempStore._currentSongStanzaTimes = []
            // _tempStore._currentSongStanzaTypeCounters = {}

            _addTitleToLyrics(song.title, song.lyrics)
            // Do not confuse anchor key with string prototype anchor method.
            if (typeof song.title.anchor !== 'function') {
                song.title = song.title.anchor
            }

            _markSideStanzas(song.lyrics)
            // Only applies to "On a Golden Cord" and "Uncanny Valley Boy."
            song.hasSideStanzas = _tempStore._hasSideStanzas

            _parseLyrics(song.lyrics)

            song.stanzaTypeCounters = _tempStore._currentSongStanzaTypeCounters
            song.isDoublespeaker = _tempStore._isDoublespeaker

            // Add annotations to song object.
            song.annotations = _tempStore._annotations
            song.annotationsDotKeys = getAnnotationsDotKeys({ selectedSong: song })

            // Add available dots to song object.
            song.dotKeys = _tempStore._songDotKeys

            // Add times for all verses to song object.
            song.times = _tempStore._songTimes

            // And dot stanza count for dev purposes.
            song.dotStanzas = _tempStore._dotStanzaCounter
        }

        _gatherDrawings(song.scenes)
    })
}

/**
 * Add wiki and portal indices. These can only be determined after collecting
 * portal links from the entire album.
 */
const _finalPrepareAllSongs = (album) => {
    album.songs.forEach(song => {
        if (!song.logue) {
            _tempStore._annotations = song.annotations
            _tempStore._finalAnnotationIndex = 0
            _tempStore._currentSongStanzaTypeCounters = song.stanzaTypeCounters

            _parseLyrics(song.lyrics, true)
            _registerFirstAndLastVerseObjects(song.lyrics)

            delete song.stanzaTypeCounters
        }
    })
}

const _gatherDrawings = (scenes) => {
    scenes.forEach(scene => {
        for (const key in scene.characters) {
            if (_tempStore._drawingCharacters[key]) {
                _tempStore._drawingCharacters[key] += scene.characters[key]
            } else {
                _tempStore._drawingCharacters[key] = scene.characters[key]
            }
        }
    })
}

const parseDrawings = (drawingCharacters) => {
    const drawingCharacterObjects = []

    let characterCount = 0

    for (const character in drawingCharacters) {
        const quantity = drawingCharacters[character]

        drawingCharacterObjects.push({
            character,
            quantity
        })

        characterCount += quantity
    }

    // Last item in array is the character count.
    drawingCharacterObjects.push(characterCount)

    return drawingCharacterObjects
}

const _addTitleToLyrics = (title, lyrics) => {
    // Add title object to lyrics object.
    const { annotation } = title,
        titleObject = {

            // Set title time to -1.
            time: -1,
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

const _addVerseObjectKeyToLyric = (lyricObject, verseObjectKey) => {

    if (typeof lyricObject === 'object') {
        lyricObject[verseObjectKey] = true
        return lyricObject

    } else {
        return {
            lyric: lyricObject,
            [verseObjectKey]: true
        }
    }
}

const _registerAfterTimeKeyFound = (lyric) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyric)) {

        if (lyric[0].italic) {
            _registerAfterTimeKeyFound(lyric[0])

        } else {
            lyric[0] = _addVerseObjectKeyToLyric(lyric[0], 'firstVerseObject')
            lyric[lyric.length - 1] = _addVerseObjectKeyToLyric(lyric[lyric.length - 1], 'lastVerseObject')
        }

    } else if (typeof lyric === 'object') {
        _registerAfterTimeKeyFound(lyric.italic)

        if (typeof lyric.anchor === 'string') {
            lyric = _addVerseObjectKeyToLyric(lyric, 'firstVerseObject')
            lyric = _addVerseObjectKeyToLyric(lyric, 'lastVerseObject')
        }
    }
}

const _registerFirstAndLastVerseObjects = (lyric) => {
    /**
     * Let verses with portals know their first and last objects, which are
     * formatted differently in the portal.
     */

    if (Array.isArray(lyric)) {
        lyric.forEach(childLyric => {
            _registerFirstAndLastVerseObjects(childLyric)
        })

    } else if (typeof lyric === 'object') {

        // Only register verses that have a portal.
        if (typeof lyric.time !== 'undefined' && lyric.verseHasPortal) {

            [LYRIC, LEFT, RIGHT, CENTRE].forEach(lyricKey => {
                _registerAfterTimeKeyFound(lyric[lyricKey])

                if (typeof lyric[lyricKey] === 'string') {
                    lyric[lyricKey] = _addVerseObjectKeyToLyric(lyric[lyricKey], 'firstVerseObject')
                    lyric[lyricKey] = _addVerseObjectKeyToLyric(lyric[lyricKey], 'lastVerseObject')
                }
            })
        }

        if (typeof lyric.unitMap !== 'undefined') {
            _registerFirstAndLastVerseObjects(lyric.subStanza)
        }
    }
}

/**
 * Recurse until object with anchor key is found.
 */
const _parseLyrics = (lyric, finalPassThrough, textKey, lyricInTime) => {

    lyricInTime = !isNaN(lyric.time) || lyricInTime

    if (lyric.unitMap && lyric.stanzaType) {
        const { _currentSongStanzaTypeCounters: counters } = _tempStore,
            { stanzaType } = lyric

        if (finalPassThrough) {
            // Don't show stanzaIndex if it's the only one of its kind.
            if (counters[stanzaType] === 1) {
                lyric.stanzaIndex = -1
            }

        } else {
            // If it's not a subsequent stanza, establish new index.
            if (!lyric.subsequent) {
                counters[stanzaType] = (counters[stanzaType] || 0) + 1
            }

            lyric.stanzaIndex = counters[stanzaType]
        }
    }

    // In other words, if lyric.time is a valid number.
    if (!finalPassThrough && !isNaN(lyric.time)) {

        _tempStore._verseIndexCounter++

        // Add verse index to lyric object.
        lyric.verseIndex = _tempStore._verseIndexCounter
        _tempStore._lastLyricWithVerseIndex = lyric

        // Add last annotation index.
        lyric.lastAnnotationIndex = _tempStore._annotations.length

        // Add time to song times.
        _tempStore._songTimes.push(lyric.time)
    }

    if (Array.isArray(lyric)) {

        lyric.forEach(childLyricValue => {
            _parseLyrics(childLyricValue, finalPassThrough, textKey, lyricInTime)
        })

    } else if (typeof lyric === 'object') {

        if (lyric.anchor) {
            _prepareAnnotation(lyric, finalPassThrough, textKey)

        } else {
            ALBUM_BUILD_KEYS.forEach(childTextKey => {

                if (childTextKey !== 'anchor' && lyric[childTextKey]) {
                    let sideStanzaTextKey

                    // Let song know that it is a doublespeaker song.
                    if (childTextKey === LEFT || childTextKey === RIGHT) {
                        _tempStore._isDoublespeaker = true
                    }

                    if (lyric.leftColumn) {
                        sideStanzaTextKey = 'leftColumn'
                    } else if (lyric.rightColumn) {
                        sideStanzaTextKey = 'rightColumn'
                    }

                    /**
                     * Any annotation in this lyric should know whether it is
                     * in a verse with a time.
                     */
                    _tempStore._lyricInTime = lyricInTime

                    _parseLyrics(lyric[childTextKey], finalPassThrough, (textKey || sideStanzaTextKey || childTextKey), lyricInTime)
                }
            })
        }
    }

    // Doublespeaker lyrics have separate keys for each column.
    if (lyric[LYRIC] || lyric[LEFT] || lyric[RIGHT] || lyric[CENTRE] || lyric.dotStanza) {

        if (lyric.dotStanza && !finalPassThrough) {
            _tempStore._dotStanzaCounter++
        }

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
            cards.forEach(card => {
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

        /**
         * Register whether this annotation is in the verse with the index.
         */
        if (_tempStore._lyricInTime) {
            annotation.verseIndex = _tempStore._verseIndexCounter
        } else {
            annotation.mostRecentVerseIndex = _tempStore._verseIndexCounter
        }

        // Let annotation know if it's in a doublespeaker column.
        if (textKey === LEFT || textKey === 'leftColumn') {
            annotation.column = LEFT

            // Easier just to hard-code this.
            annotation.columnIndex = 0

        } else if (textKey === RIGHT || textKey === 'rightColumn') {
            annotation.column = RIGHT
            annotation.columnIndex = 1
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
                if (_addPortalLink(card, dotKeys, annotationIndex, cardIndex, annotation.verseIndex, annotation.column, annotation.columnIndex)) {
                    _tempStore._lastLyricWithVerseIndex.verseHasPortal = true
                }
            })
        } else {
            _prepareCard(cards, dotKeys)
            _addDotKeys(cards, dotKeys)
            if (_addPortalLink(cards, dotKeys, annotationIndex, undefined, annotation.verseIndex, annotation.column, annotation.columnIndex)) {
                _tempStore._lastLyricWithVerseIndex.verseHasPortal = true
            }
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

    if (description) {
        const hasWiki = _parseWiki('wiki', description, finalPassThrough)

        if (hasWiki && !finalPassThrough) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
            _tempStore._songDotKeys[REFERENCE] = true
        }
    }

    if (portalLinks && finalPassThrough) {
        portalLinks.forEach(link => {
            // delete link.cardIndex
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

                // Popup anchor index is either for portal or wiki.
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

const _addPortalLink = (card, dotKeys, annotationIndex, cardIndex = 0, verseIndex, column, columnIndex) => {
    // Add portal link to annotation card..
    const { portal } = card
    if (portal) {

        const portalLink = {
                songIndex: _tempStore._songIndex,
                annotationIndex,
                cardIndex,
                verseIndex,
                column,
                columnIndex
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

        return true

    } else {
        return false
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
            const song = album.songs[link.songIndex],
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
