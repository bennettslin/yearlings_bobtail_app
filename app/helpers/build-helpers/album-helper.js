// Parse album data for build.

import { REFERENCE } from '../../constants/dots'
import { LYRIC, LEFT, RIGHT, CENTRE, ANCHOR, ITALIC, COLUMN, COLUMN_INDEX, LEFT_COLUMN, RIGHT_COLUMN, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN, PROPER_NOUN } from '../../constants/lyrics'
import { adminGatherDrawings, finaliseDrawings, registerDrawingTasks } from './drawings-helper'
import { recurseToFindAnchors, registerTitle, registerHasSideStanzas, initialRegisterStanzaTypes, registerIsDoublespeaker, registerAdminDotStanzas, finalRegisterStanzaTypes, finalAddPlaceholderStanzas } from './lyrics-helper'
import { getIsLogue, getSongTitle, getVerseObject } from '../data-helper'
import { getFormattedAnnotationTitle } from '../format-helper'

const _tempStore = {
    _wikiIndex: 1,
    _portalLinks: {},
    _finalAnnotationIndex: 0,
}

export const parseAlbumData = (album) => {

    // Allow helpers to access songs directly.
    _tempStore._songs = album.songs

    _initialPrepareAlbum(album)

    _addDestinationPortalLinks(album)

    // Add drawings for admin purposes.
    finaliseDrawings(album)

    _finalPrepareAlbum(album)

    // FIXME: Temporarily add portal links to album for debugging purposes.
    // album.portalLinks = _tempStore._portalLinks

    return album
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (album) => {

    album.songs.forEach((song, songIndex) => {

        if (!getIsLogue(songIndex, album.songs)) {

            _tempStore._songIndex = songIndex

            // Add title object to lyrics array.
            registerTitle(song)

            /**
             * Let app know that song has side stanzas. Only applies to "On a
             * Golden Cord" and "Uncanny Valley Boy."
             */
            registerHasSideStanzas(song)

            /**
             * Associate a type and index for each stanza, like verse, chorus,
             * and so forth.
             */
            initialRegisterStanzaTypes(album, song)

            // Parse lyrics.
            _initialPrepareLyrics(song)
        }

        adminGatherDrawings(album, song.scenes, songIndex)
    })
}

const _initialPrepareLyrics = (song) => {

    const { lyrics } = song

    // Initialise song.
    song.adminDotStanzas = 0
    song.adminPluralCardsCount = 0
    song.annotations = []
    song.verseIndexCounter = 0
    song.verseTimes = []

    lyrics.forEach(unitArray => {

        unitArray.forEach(verseObject => {

            // Tell song it is a doublespeaker song
            registerIsDoublespeaker(song, verseObject)

            /**
             * Recurse until each anchor is found. Initially, we will also
             * register each verse with time.
             */
            recurseToFindAnchors({
                registerVerseTimes: true,
                song,
                verseObject,
                callbackFunction: _initialRegisterAnnotation
            })

            // Tell song its dot stanza count, for admin purposes.
            registerAdminDotStanzas(song, verseObject)
        })
    })

    // Clean up.
    delete song.verseIndexCounter
}

/**************
 * ANNOTATION *
 **************/

const _initialRegisterAnnotation = ({

    inVerseWithTimeIndex = -1,
    song,
    verseObject,
    lyric,
    textKey

}) => {
    let cards = lyric.annotation

    const annotationIndex = song.annotations.length + 1,
        annotation = {},
        allDotKeys = {}

    // Tell verse object its annotation anchors.
    verseObject.currentAnnotationIndices = verseObject.currentAnnotationIndices || []
    verseObject.currentAnnotationIndices.push(annotationIndex)

    // Tell annotation and anchored lyric the index. 1-based index.
    annotation.annotationIndex = annotationIndex
    lyric.annotationIndex = annotationIndex

    // If in a verse with time, tell annotation its verse index.
    if (inVerseWithTimeIndex > -1) {
        annotation.verseIndex = inVerseWithTimeIndex

    // Otherwise, tell it the most recent verse index. For title, this is 0.
    } else {
        annotation.mostRecentVerseIndex = song.verseIndexCounter
    }

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(lyric[ANCHOR], lyric[PROPER_NOUN], lyric.keepEndCharacter)

    // Let annotation know if it's in a doublespeaker column.
    if (textKey === LEFT || textKey === LEFT_COLUMN) {
        annotation[COLUMN] = LEFT
        annotation[COLUMN_INDEX] = 0

    } else if (textKey === RIGHT || textKey === RIGHT_COLUMN) {
        annotation[COLUMN] = RIGHT
        annotation[COLUMN_INDEX] = 1
    }

    // Cards may be single annotation card or array of cards.

    // Temporarily make single card an array of one object.
    if (!Array.isArray(cards)) {
        cards = [cards]

    /**
     * Or else add to count of annotations with plural cards, for admin
     * purposes.
     */
    } else {
        song.adminPluralCardsCount++
    }

    cards.forEach((card, cardIndex) => {
        _initialPrepareCard(card, allDotKeys)
        _getDotKeysInAllCards(card, allDotKeys)
        if (_addSourcePortalLink({
            card,
            cardIndex,
            dotKeys: allDotKeys,
            annotation
        })) {
            verseObject.verseHasPortal = true
        }
    })

    // Revert array of one object to a single card.
    if (cards.length === 1) {
        cards = cards[0]
    }

    // Add dot keys to both anchored lyric and annotation.
    annotation.cards = cards
    annotation.dotKeys = allDotKeys
    lyric.dotKeys = allDotKeys

    // Add annotation object to annotations array.
    song.annotations.push(annotation)

    // Clean up lyric object.
    delete lyric[PROPER_NOUN]
}

const _finalRegisterAnnotation = ({

    song,
    lyric

}) => {
    let cards = lyric.annotation

    const annotation = song.annotations[_tempStore._finalAnnotationIndex]
    _tempStore._annotationAnchorIndex = 1

    annotation.annotationAnchors = []

    if (Array.isArray(cards)) {
        cards.forEach(card => {
            _finalPrepareCard(annotation, card)
        })
    } else {
        _finalPrepareCard(annotation, cards)
    }

    // Clean up lyric object, now that it's the final pass through.
    delete lyric.annotation

    _tempStore._finalAnnotationIndex++
}

const _initialPrepareCard = (card, dotKeys) => {
    const { description } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _initialParseWiki('wiki', description)

        if (hasWiki) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
        }
    }
}

const _finalPrepareCard = (annotation, card) => {
    const { description,
            portalLinks } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotation, 'wiki', description)
    }

    if (portalLinks) {
        portalLinks.forEach(link => {
            delete link.cardIndex
            annotation.annotationAnchors.push(Object.assign({}, link))
            link.portalIndex = _tempStore._annotationAnchorIndex
            _tempStore._annotationAnchorIndex++
        })
    }
}

const _initialParseWiki = (key, object) => {
    /**
     * This method gets called in two places. The first time is simply to check
     * if there is a wiki key. The second is in the final pass through, to add
     * the wiki index.
     */

    if (!object || typeof object !== 'object') {
        return false

    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            return keyFound || _initialParseWiki(key, element)
        }, false)

    } else {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            const hasWiki = !!object[key]

            return keyFound || hasWiki || _initialParseWiki(key, object[currentKey])
        }, false)
    }
}

const _finalParseWiki = (annotation, key, object) => {
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
            return _finalParseWiki(annotation, key, element) || keyFound
        }, false)

    } else {
        return Object.keys(object).reduce((keyFound, currentKey) => {
            const hasWiki = !!object[key]

            if (!object.wikiIndex && typeof object[key] === 'string') {

                // Popup anchor index is either for portal or wiki.
                object.wikiIndex = _tempStore._annotationAnchorIndex
                _tempStore._annotationAnchorIndex++
                annotation.annotationAnchors.push(object[key])
                delete object[key]
            }

            return keyFound || hasWiki || _finalParseWiki(annotation, key, object[currentKey])
        }, false)
    }
}

const _getDotKeysInAllCards = (card, allDotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        Object.keys(card.dotKeys).forEach(dotKey => {
            allDotKeys[dotKey] = true
        })
    }
}

/*********
 * FINAL *
 *********/

/**
 * Add wiki and portal indices. These can only be determined after collecting
 * portal links from the entire album.
 */
const _finalPrepareAlbum = (album) => {

    album.songs.forEach((song, songIndex) => {

        if (!getIsLogue(songIndex, album.songs)) {
            _tempStore._finalAnnotationIndex = 0

            finalRegisterStanzaTypes(song)

            _finalPrepareLyrics(song)

            _registerBeginningAndEndingVerseSpans(song.lyrics)
        }

        registerDrawingTasks(song)
        finalAddPlaceholderStanzas(album, song)
    })

    delete album.largestStanzaTimesLength
}

const _finalPrepareLyrics = (song) => {
    const { lyrics } = song

    lyrics.forEach(unitArray => {

        unitArray.forEach(verseObject => {

            // Recurse until each anchor is found.
            recurseToFindAnchors({
                song,
                verseObject,
                callbackFunction: _finalRegisterAnnotation
            })
        })
    })
}

/**********
 * PORTAL *
 **********/

const _addSourcePortalLink = ({

    card,
    dotKeys,
    annotation,
    cardIndex = 0

}) => {
    // Add portal link to annotation card.
    const { portal } = card,
        { verseIndex,
          annotationIndex,
          column,
          columnIndex } = annotation

    if (portal) {
        // Portal is either object or string.
        const { portalKey,
                portalPrefix } = portal,

            { _songs,
              _songIndex } = _tempStore,

            portalLink = {
                songIndex: _songIndex,
                annotationIndex,
                cardIndex,
                verseIndex,
                column,
                columnIndex,
                portalPrefix
            }

        // Add data about portal.
        portalLink.songTitle = getSongTitle({
            songIndex: _songIndex,
            songs: _songs
        })
        portalLink.verseObject = getVerseObject(_songIndex, verseIndex, _songs)

        // If first portal link, initialise array.
        if (!_tempStore._portalLinks[portalKey || portal]) {
            _tempStore._portalLinks[portalKey || portal] = []
        }

        // Add portal link to portal links array.
        _tempStore._portalLinks[portalKey || portal].push(portalLink)

        // Add portal key to dot keys.
        dotKeys.portal = true

        // Clean up card unit.
        delete card.portal

        return true

    } else {
        return false
    }
}

const _addDestinationPortalLinks = (album) => {
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

const _registerBeginningAndEndingVerseSpans = (lyric) => {
    /**
     * Let verses with portals know their first and last objects, which are
     * formatted differently in the portal.
     */

    if (Array.isArray(lyric)) {
        lyric.forEach(childLyric => {
            _registerBeginningAndEndingVerseSpans(childLyric)
        })

    } else if (typeof lyric === 'object') {

        // Only register verses that have a portal.
        if (typeof lyric.time !== 'undefined' && lyric.verseHasPortal) {

            [LYRIC, LEFT, RIGHT, CENTRE].forEach(lyricKey => {
                _registerAfterTimeKeyFound(lyric[lyricKey])

                if (typeof lyric[lyricKey] === 'string') {
                    lyric[lyricKey] = _addVerseObjectKeyToLyric(lyric[lyricKey], IS_VERSE_BEGINNING_SPAN)

                    lyric[lyricKey] = _addVerseObjectKeyToLyric(lyric[lyricKey], IS_VERSE_ENDING_SPAN)
                }
            })
        }

        if (typeof lyric.unitMap !== 'undefined') {
            _registerBeginningAndEndingVerseSpans(lyric.subStanza)
        }
    }
}

const _registerAfterTimeKeyFound = (lyric) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyric)) {

        if (lyric[0][ITALIC]) {
            _registerAfterTimeKeyFound(lyric[0])

        } else {
            lyric[0] = _addVerseObjectKeyToLyric(lyric[0], IS_VERSE_BEGINNING_SPAN)
            lyric[lyric.length - 1] = _addVerseObjectKeyToLyric(lyric[lyric.length - 1], IS_VERSE_ENDING_SPAN)
        }

    } else if (typeof lyric === 'object') {
        _registerAfterTimeKeyFound(lyric[ITALIC])

        if (typeof lyric.anchor === 'string') {
            lyric = _addVerseObjectKeyToLyric(lyric, IS_VERSE_BEGINNING_SPAN)
            lyric = _addVerseObjectKeyToLyric(lyric, IS_VERSE_ENDING_SPAN)
        }
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
