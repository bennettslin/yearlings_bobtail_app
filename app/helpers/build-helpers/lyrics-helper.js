// Parse lyric data for build.

import { ALBUM_BUILD_KEYS,
         ANCHOR,

         DOT_STANZA,
         TOP_SIDE_STANZA,
         BOTTOM_SIDE_STANZA,
         HAS_SIDE_STANZAS,

         IS_DOUBLESPEAKER,
         LEFT,
         RIGHT,
         LEFT_COLUMN,
         RIGHT_COLUMN,

         PROPER_NOUN } from '../../constants/lyrics'

/***********
 * INITIAL *
 ***********/

export const registerTitle = (songObject) => {

    const { title, lyrics } = songObject,
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
        songObject.title = title[ANCHOR]
    }
}

export const registerHasSideStanzas = (songObject) => {

    const { lyrics } = songObject
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
    songObject[HAS_SIDE_STANZAS] = songHasSideStanzas
}

export const initialRegisterStanzaTypes = (albumObject, songObject) => {

    const { lyrics } = songObject,
        tempStanzaTypeCounters = {},
        stanzaTimes = []

    lyrics.forEach(unitArray => {

        // Starting time of the first verse is the starting time of the unit.
        const unitFirstVerseTime = unitArray[0].time,
            unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.unitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

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

                tempStanzaTypeCounters[stanzaType] = (tempStanzaTypeCounters[stanzaType] || 0) + 1
            }

            // Tell unit its index.
            unitMapObject.stanzaIndex = tempStanzaTypeCounters[stanzaType]
        }
    })

    // Establish which song on the album has the most stanzas.
    if (stanzaTimes.length > albumObject.maxStanzaTimesCount) {
        albumObject.maxStanzaTimesCount = stanzaTimes.length
    }

    songObject.tempStanzaTypeCounters = tempStanzaTypeCounters
    songObject.stanzaTimes = stanzaTimes
}

export const registerIsDoublespeaker = (songObject, verseObject) => {

    // It's a doublespeaker song if it has "left" or "right" keys.
    if (verseObject[LEFT] || verseObject[RIGHT]) {
        songObject[IS_DOUBLESPEAKER] = true
    }
}

export const registerAdminDotStanzas = (songObject, verseObject) => {

    // For admin purposes.
    if (verseObject[DOT_STANZA]) {
        songObject.adminDotStanzas++
    }
}

/*********
 * FINAL *
 *********/

export const finalRegisterStanzaTypes = (songObject) => {

    const { lyrics,
            tempStanzaTypeCounters } = songObject

    lyrics.forEach(unitArray => {

        const unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.unitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            // Don't show stanzaIndex if it's the only one of its kind.
            if (tempStanzaTypeCounters[stanzaType] === 1) {
                unitMapObject.stanzaIndex = -1
            }
        }
    })

    // Not needed after each unit is told its index.
    delete songObject.tempStanzaTypeCounters
}

/***********
 * HELPERS *
 ***********/

export const recurseToFindAnchors = ({

    inVerseWithTimeIndex = -1,
    registerVerseTimes = false,
    albumObject,
    songObject,
    verseObject,
    lyricEntity = verseObject,
    textKey,
    callbackFunction

}) => {

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (registerVerseTimes && !isNaN(lyricEntity.time)) {
        // All recursed lyrics will know they're nested in verse with time.

        inVerseWithTimeIndex = songObject.tempVerseIndexCounter

        // Add index to verse object.
        lyricEntity.verseIndex = songObject.tempVerseIndexCounter

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = songObject.annotations.length

        // Add verse time to song times.
        songObject.verseTimes.push(lyricEntity.time)

        songObject.tempVerseIndexCounter++
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            recurseToFindAnchors({
                inVerseWithTimeIndex,
                registerVerseTimes,
                albumObject,
                songObject,
                verseObject,
                lyricEntity: childEntity,
                textKey,
                callbackFunction
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            callbackFunction({
                inVerseWithTimeIndex,
                albumObject,
                songObject,
                verseObject,
                lyricObject: lyricEntity,
                textKey
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childKey => {

                if (lyricEntity[childKey]) {

                    // TODO: Not sure what this is doing exactly...
                    let sideStanzaTextKey =
                        (lyricEntity[LEFT_COLUMN] && LEFT_COLUMN) ||
                        (lyricEntity[RIGHT_COLUMN] && RIGHT_COLUMN)

                    recurseToFindAnchors({
                        inVerseWithTimeIndex,
                        registerVerseTimes,
                        albumObject,
                        songObject,
                        verseObject,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || sideStanzaTextKey || childKey),
                        callbackFunction
                    })
                }
            })
        }
    }
}
