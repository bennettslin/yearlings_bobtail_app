// Parse album data for build.
import { REFERENCE } from '../constants/dots'
import { ALBUM_BUILD_KEYS, LYRIC, LEFT, RIGHT, CENTRE, ANCHOR, ITALIC, DOT_STANZA, TOP_SIDE_STANZA, BOTTOM_SIDE_STANZA, COLUMN, COLUMN_INDEX, LEFT_COLUMN, RIGHT_COLUMN, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN, HAS_SIDE_STANZAS, IS_DOUBLESPEAKER, PROPER_NOUN } from '../constants/lyrics'
import { getIsLogue, getSongObject, getSongTitle, getVerseObject } from './data-helper'
import { getFormattedAnnotationTitle } from './format-helper'

const _tempStore = {
    _annotationAnchors: [],
    _wikiIndex: 1,
    _portalLinks: {},
    _verseTimes: [],
    _currentSongMultipleCardAnnotationsCounter: 0,
    _largestStanzaTimesLength: 0,
    _drawings: {},
    _finalAnnotationIndex: 0,
    _adminDotStanzaCounter: 0,
}

export const prepareAlbumData = (album) => {

    // Allow helpers to access songs directly.
    _tempStore._songs = album.songs

    _initialPrepareAllSongs(album)

    _addDestinationPortalLinks(album)

    // Add drawings for admin purposes.
    album.drawings = _finaliseDrawings(album, _tempStore._drawings)

    _finalPrepareAllSongs(album)

    // FIXME: Temporarily add portal links to album for debugging purposes.
    // album.portalLinks = _tempStore._portalLinks

    return album
}

const _initialPrepareAllSongs = (album) => {

    album.songs.forEach((song, songIndex) => {

        if (!getIsLogue(songIndex, album.songs)) {

            // Initialise annotations array.
            song.annotations = []

            _tempStore._songIndex = songIndex
            _tempStore._verseTimes = []
            _tempStore._adminDotStanzaCounter = 0
            _tempStore._currentSongMultipleCardAnnotationsCounter = 0

            // Add title object to lyrics array.
            _registerTitle(song)

            /**
             * Let app know that song has side stanzas. Only applies to "On a
             * Golden Cord" and "Uncanny Valley Boy."
             */
            _registerHasSideStanzas(song)

            /**
             * Associate a type and index for each stanza, like verse, chorus,
             * and so forth.
             */
            _registerStanzaTypes(song)

            // Parse lyrics.
            _parseLyrics(song)

            // Add annotations to song object.
            song.annotationsDotKeys = _getAnnotationsDotKeys({ selectedSong: song })

            // Add times for all verses to song object.
            song.verseTimes = _tempStore._verseTimes

            // And dot stanza count for dev purposes.
            song.dotStanzas = _tempStore._adminDotStanzaCounter

            // Add count of annotations with multiple cards.
            // TODO: This is also for admin purposes.
            song.multipleCardAnnotationsCount = _tempStore._currentSongMultipleCardAnnotationsCounter

            // TODO: Have a cleanup method.
            delete song.verseIndexCounter
        }

        _gatherDrawings(song.scenes, songIndex)
    })
}

/***********
 * INITIAL *
 ***********/

const _registerTitle = (song) => {

    const { title, lyrics } = song,
        { annotation } = title,
        titleObject = {

            // Set title time to -1.
            lyric: title,
            isTitle: true
        }

    // Capitalise song title in annotation title.
    if (annotation) {
        title[PROPER_NOUN] = true
    }

    /**
     * If first unit contains a lone dot stanza, append title to unit. (This is
     * now never the case.)
     */
    if (lyrics[0][lyrics[0].length - 1].unitMap && lyrics[0].length === 1) {
        lyrics[0].unshift(titleObject)

    // Otherwise, create a new first unit that just contains the title.
    } else {
        lyrics.unshift([titleObject])
    }

    /**
     * Now that title object is pushed into lyrics, replace it in song object
     * with just text. (Don't confuse anchor key with string prototype anchor
     * method!)
     */
    if (typeof title[ANCHOR] !== 'function') {
        song.title = title[ANCHOR]
    }
}

const _registerHasSideStanzas = (song) => {

    const { lyrics } = song
    let songHasSideStanzas = false

    lyrics.forEach(unit => {

        const unitHasSideStanzas = unit.reduce((hasSideStanzas, verse) => {
                return hasSideStanzas || !!verse[TOP_SIDE_STANZA] || !!verse[BOTTOM_SIDE_STANZA]
            }, false)

        if (unitHasSideStanzas) {

            // Let app know which column to hide if single column is shown.
            unit.forEach(verse => {
                if (verse[TOP_SIDE_STANZA] || verse[BOTTOM_SIDE_STANZA]) {
                    verse[RIGHT_COLUMN] = true

                } else {
                    verse[LEFT_COLUMN] = true
                }
            })
        }

        songHasSideStanzas = unitHasSideStanzas || songHasSideStanzas
    })

    // Tell song it has side stanzas, so ear button can be shown if needed.
    song[HAS_SIDE_STANZAS] = songHasSideStanzas
}

const _registerStanzaTypes = (song, finalPassThrough) => {

    const { lyrics } = song,
        stanzaTypeCounters = song.stanzaTypeCounters || {},
        stanzaTimes = []

    // FIXME: This can certainly be more efficient. Shouldn't need to do the finalPassThrough thing.
    lyrics.forEach(unitArray => {

        // Starting time of the first verse is the starting time of the unit.
        const unitFirstVerseTime = unitArray[0].time,
            unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.unitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            if (!finalPassThrough) {
                // If it's not a subsequent stanza, establish new index.
                if (!unitMapObject.subsequent) {

                    /**
                     * This will let audio slider know the relative width of
                     * each unit, based on its time length.
                     */
                    stanzaTimes.push({
                        time: unitFirstVerseTime,
                        type: stanzaType
                    })

                    stanzaTypeCounters[stanzaType] = (stanzaTypeCounters[stanzaType] || 0) + 1
                }

                // Tell unit its index.
                unitMapObject.stanzaIndex = stanzaTypeCounters[stanzaType]

            } else {
                // Don't show stanzaIndex if it's the only one of its kind.
                if (stanzaTypeCounters[stanzaType] === 1) {
                    unitMapObject.stanzaIndex = -1
                }
            }
        }
    })

    if (!finalPassThrough) {
        song.stanzaTimes = stanzaTimes
        song.stanzaTypeCounters = stanzaTypeCounters

        // Establish which song has the largest number of stanzas.
        if (song.stanzaTimes.length > _tempStore._largestStanzaTimesLength) {
            _tempStore._largestStanzaTimesLength = song.stanzaTimes.length
        }

    } else {
        // Not needed after each unit is told its index.
        delete song.stanzaTypeCounters
    }
}

const _parseLyrics = (song, finalPassThrough) => {

    const { lyrics } = song

    lyrics.forEach(unitArray => {

        unitArray.forEach(verseObject => {

            if (!finalPassThrough) {
                // Tell each verse with time its index.
                _registerVerses(song, verseObject)
            }

            if (!finalPassThrough) {
                // Tell song it is a doublespeaker song
                _registerIsDoublespeaker(song, verseObject)
            }

            // Recurse until all anchors are found.
            _registerAnchors({
                song,
                verseObject,
                finalPassThrough
            })

            if (!finalPassThrough) {
                // Tell each verse all its annotations.
                _registerVerseAnnotations(verseObject)
            }
        })
    })
}

const _registerVerses = (song, verseObject) => {

    // Only register verses associated with a song time.
    if (!isNaN(verseObject.time)) {

        song.verseIndexCounter = !isNaN(song.verseIndexCounter) ?
            song.verseIndexCounter + 1 : 0

        // Add index to verse object.
        verseObject.verseIndex = song.verseIndexCounter
        _tempStore._lastLyricWithVerseIndex = verseObject

        // Add most recent annotation index.
        verseObject.lastAnnotationIndex = song.annotations.length

        // Add verse time to song times.
        _tempStore._verseTimes.push(verseObject.time)
    }
}

const _registerIsDoublespeaker = (song, verseObject) => {

    // It's a doublespeaker song if it has "left" or "right" keys.
    if (verseObject[LEFT] || verseObject[RIGHT]) {
        song[IS_DOUBLESPEAKER] = true
    }
}

const _registerAnchors = ({

    song,
    verseObject,
    lyric = verseObject,
    textKey,
    finalPassThrough

}) => {

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyric)) {

        lyric.forEach(childLyric => {
            _registerAnchors({
                song,
                verseObject,
                lyric: childLyric,
                textKey,
                finalPassThrough
            })
        })

    } else if (typeof lyric === 'object') {

        if (lyric[ANCHOR]) {
            _prepareAnnotation({
                song,
                verseObject,
                lyric,
                textKey,
                finalPassThrough
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childTextKey => {

                if (lyric[childTextKey]) {

                    // TODO: Not sure what this is doing exactly...
                    let sideStanzaTextKey =
                        (lyric[LEFT_COLUMN] && LEFT_COLUMN) ||
                        (lyric[RIGHT_COLUMN] && RIGHT_COLUMN)

                    _registerAnchors({
                        song,
                        verseObject,
                        lyric: lyric[childTextKey],
                        textKey: (textKey || sideStanzaTextKey || childTextKey),
                        finalPassThrough
                    })
                }
            })
        }
    }
}

const _registerVerseAnnotations = (verseObject) => {

    if (verseObject[LYRIC] || verseObject[LEFT] || verseObject[RIGHT] || verseObject[CENTRE] || verseObject[DOT_STANZA]) {

        // Last annotation index is no longer needed.
        // TODO: Move into cleanup method.
        delete verseObject.lastAnnotationIndex
    }

    // For admin purposes.
    if (verseObject[DOT_STANZA]) {
        _tempStore._adminDotStanzaCounter++
    }
}

/**************
 * ANNOTATION *
 **************/

const _prepareAnnotation = ({

    song,
    verseObject,
    lyric,
    textKey,
    finalPassThrough

}) => {
    const cards = lyric.annotation

    if (!finalPassThrough) {

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
        if (!isNaN(verseObject.verseIndex)) {
            annotation.verseIndex = verseObject.verseIndex

        // Otherwise, tell it the most recent verse index.
        } else {
            annotation.mostRecentVerseIndex =
                // If it's the title, set to first verse.
                song.verseIndexCounter > -1 ? song.verseIndexCounter : 0
        }

        // Let annotation know if it's in a doublespeaker column.
        if (textKey === LEFT || textKey === LEFT_COLUMN) {
            annotation[COLUMN] = LEFT
            annotation[COLUMN_INDEX] = 0

        } else if (textKey === RIGHT || textKey === RIGHT_COLUMN) {
            annotation[COLUMN] = RIGHT
            annotation[COLUMN_INDEX] = 1
        }

        // Add formatted title to annotation.
        annotation.title = getFormattedAnnotationTitle(lyric[ANCHOR], lyric[PROPER_NOUN], lyric.keepEndCharacter)

        // Cards may be single annotation card or array of cards.

        // TODO: This can probably be simplified considerably.
        if (Array.isArray(cards)) {
            _tempStore._currentSongMultipleCardAnnotationsCounter++
            cards.forEach((card, cardIndex) => {
                _prepareCard(card, allDotKeys)
                _getAllDotKeys(card, allDotKeys)
                if (_addSourcePortalLink({
                    card,
                    dotKeys: allDotKeys,
                    annotationIndex,
                    cardIndex,
                    verseIndex: annotation.verseIndex,
                    [COLUMN]: annotation[COLUMN],
                    [COLUMN_INDEX]: annotation[COLUMN_INDEX]
                })) {
                    _tempStore._lastLyricWithVerseIndex.verseHasPortal = true
                }
            })
        } else {
            _prepareCard(cards, allDotKeys)
            _getAllDotKeys(cards, allDotKeys)
            if (_addSourcePortalLink({
                card: cards,
                dotKeys: allDotKeys,
                annotationIndex,
                verseIndex: annotation.verseIndex,
                [COLUMN]: annotation[COLUMN],
                [COLUMN_INDEX]: annotation[COLUMN_INDEX]
            })) {
                _tempStore._lastLyricWithVerseIndex.verseHasPortal = true
            }
        }

        annotation.cards = cards

        // TODO: Add all these things at the end.

        // Add dot keys to both anchored lyric and annotation.
        lyric.dotKeys = allDotKeys
        annotation.dotKeys = allDotKeys

        // Add annotation object to annotations array.
        song.annotations.push(annotation)

        // Clean up lyric object.
        delete lyric[PROPER_NOUN]

    } else {
        const annotation = song.annotations[_tempStore._finalAnnotationIndex]

        _tempStore._annotationAnchors = []
        _tempStore._annotationAnchorIndex = 1

        if (Array.isArray(cards)) {
            cards.forEach(card => {
                _prepareCard(card, undefined, true)
            })
        } else {
            _prepareCard(cards, undefined, true)
        }

        annotation.annotationAnchors = _tempStore._annotationAnchors

        // Clean up lyric object, now that it's the final pass through.
        delete lyric.annotation

        _tempStore._finalAnnotationIndex++
    }
}

const _getAnnotationsDotKeys = (props) => {
    const selectedSong = props.selectedSong || getSongObject(props.selectedSongIndex)

    return selectedSong ? selectedSong.annotations.map(annotation => {
        return annotation.dotKeys
    }) : null
}

const _prepareCard = (card, dotKeys, finalPassThrough) => {
    const { description,
            portalLinks } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _parseWiki('wiki', description, finalPassThrough)

        if (hasWiki && !finalPassThrough) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
        }
    }

    if (portalLinks && finalPassThrough) {
        portalLinks.forEach(link => {
            delete link.cardIndex
            _tempStore._annotationAnchors.push(Object.assign({}, link))
            link.portalIndex = _tempStore._annotationAnchorIndex
            _tempStore._annotationAnchorIndex++
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
                object.wikiIndex = _tempStore._annotationAnchorIndex
                _tempStore._annotationAnchorIndex++
                _tempStore._annotationAnchors.push(object[key])
                delete object[key]
            }

            return keyFound || hasWiki || _parseWiki(key, object[currentKey], finalPassThrough)
        }, false)
    }
}

const _getAllDotKeys = (card, allDotKeys) => {
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
const _finalPrepareAllSongs = (album) => {

    album.songs.forEach((song, songIndex) => {

        if (!getIsLogue(songIndex, album.songs)) {
            _tempStore._finalAnnotationIndex = 0

            _registerStanzaTypes(song, true)

            _parseLyrics(song, true)

            _registerBeginningAndEndingVerseSpans(song.lyrics)
        }

        _finaliseDrawingTasks(song)
        _expandStanzaTimes(song)
    })
}

/**********
 * PORTAL *
 **********/

const _addSourcePortalLink = ({
    card,
    dotKeys,
    annotationIndex,
    cardIndex = 0,
    verseIndex,
    column,
    columnIndex
}) => {
    // Add portal link to annotation card..
    const { portal } = card

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


// FIXME: Can this be taken care of in the view itself?
const _expandStanzaTimes = (song) => {

    // Include logues.
    if (!song.stanzaTimes) {
        song.stanzaTimes = []
    }

    /**
     * We want the stanza time bars to animate nicely. As such, the number of
     * stanza times for each song will be the same.
     */
    while (song.stanzaTimes.length < _tempStore._largestStanzaTimesLength) {
        song.stanzaTimes.push({
            type: 'placeholder',
            time: song.totalTime
        })
    }
}

const _gatherDrawings = (scenes, songIndex) => {
    const drawingTypes = ['actors', 'backdrops', 'stageProps']

    scenes.forEach((scene, sceneIndex) => {
        drawingTypes.forEach(drawingType => {

            // Initialise object for actors, backdrops, stageProps.
            if (!_tempStore._drawings[drawingType]) {
                _tempStore._drawings[drawingType] = {}
            }

            for (const key in scene[drawingType]) {

                const keyObject = {
                    songIndex,
                    sceneIndex: sceneIndex + 1
                }

                // Initialise array for each actor, backdrop, stageProp.
                if (!_tempStore._drawings[drawingType][key]) {
                    _tempStore._drawings[drawingType][key] = []
                }

                if (drawingType === 'actors') {

                    /**
                     * If actor and character are the same, the entry will be a
                     * string. If not, the entry will be an object.
                     */
                    const characterEntry = scene[drawingType][key],
                        entryIsObject = typeof characterEntry === 'object' && !characterEntry.description,
                        character = entryIsObject ? Object.keys(characterEntry)[0] : key,
                        descriptionObject = entryIsObject ? scene[drawingType][key][character] : characterEntry

                    keyObject.character = character
                    keyObject.descriptionObject = descriptionObject

                } else {
                    keyObject.descriptionObject = scene[drawingType][key]
                }

                _tempStore._drawings[drawingType][key].push(keyObject)
            }
        })

    })
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

/************
 * DRAWINGS *
 ************/

const _finaliseDrawings = (album, drawings) => {

    // Turn actors object into array for easier frontend parsing.
    const actors = []
        // backdrops = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0
    //     backdropsTotalCount = 0,
    //     backdropsTodoCount = 0
    // //
    // Object.keys(drawings.backdrops).forEach(backdrop => {
    //
    // })

    Object.keys(drawings.actors).forEach(actor => {
        const roles = drawings.actors[actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0

        roles.forEach(role => {

            const { songIndex,
                    sceneIndex,
                    descriptionObject } = role,
                roleObject = { songIndex,
                               sceneIndex }

            // This will eventually always be an object.
            if (typeof descriptionObject === 'object') {
                roleObject.todo = descriptionObject.todo
                roleObject.description = descriptionObject.description

                if (roleObject.todo) {
                    rolesTodoCount++
                }
            }

            // Initialise array for each character.
            if (!characters[role.character]) {
                characters[role.character] = []
            }

            characters[role.character].push(roleObject)

            // Let song know its individual todos.
            if (isNaN(album.songs[songIndex].actorsTodoCount)) {
                album.songs[songIndex].actorsTodoCount = 0
                album.songs[songIndex].actorsTotalCount = 0
            }
            if (roleObject.todo) {
                album.songs[songIndex].actorsTodoCount++
            }
            album.songs[songIndex].actorsTotalCount++

        })

        actorsTodoCount += rolesTodoCount
        actorsTotalCount += rolesTotalCount

        actors.push({
            actor,
            characters,
            rolesTodoCount,
            rolesTotalCount
        })
    })

    drawings.actors = actors
    drawings.actorsTodoCount = actorsTodoCount
    drawings.actorsTotalCount = actorsTotalCount

    return drawings
}

const _finaliseDrawingTasks = (song) => {

    // Assume two hours per rough drawing.
    const hoursPerRoughDrawing = 2,
        drawingActorsHoursWorked = (song.actorsTotalCount - song.actorsTodoCount) * hoursPerRoughDrawing,
        drawingActorsHoursTotal = song.actorsTotalCount * hoursPerRoughDrawing

    if (!song.tasks) {
        song.tasks = []
    }

    delete song.actorsTodoCount
    delete song.actorsTotalCount

    song.tasks.push({
        taskName: 'rough drawings of actors',
        workedHours: drawingActorsHoursWorked,
        neededHours: drawingActorsHoursTotal
    })
}
