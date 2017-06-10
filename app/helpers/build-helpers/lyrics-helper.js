// Helpers for parsing album data for build.
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

export const registerTitle = (song) => {

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

export const registerHasSideStanzas = (song) => {

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

export const initialRegisterStanzaTypes = (song) => {

    const { lyrics } = song,
        stanzaTypeCounters = {},
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

                stanzaTypeCounters[stanzaType] = (stanzaTypeCounters[stanzaType] || 0) + 1
            }

            // Tell unit its index.
            unitMapObject.stanzaIndex = stanzaTypeCounters[stanzaType]
        }
    })

    song.stanzaTypeCounters = stanzaTypeCounters
    song.stanzaTimes = stanzaTimes
}

export const registerIsDoublespeaker = (song, verseObject) => {

    // It's a doublespeaker song if it has "left" or "right" keys.
    if (verseObject[LEFT] || verseObject[RIGHT]) {
        song[IS_DOUBLESPEAKER] = true
    }
}

export const registerAdminDotStanzas = (song, verseObject) => {

    // For admin purposes.
    if (verseObject[DOT_STANZA]) {
        song.adminDotStanzas++
    }
}

/*********
 * FINAL *
 *********/

export const finalRegisterStanzaTypes = (song) => {

    const { lyrics,
            stanzaTypeCounters } = song

    lyrics.forEach(unitArray => {

        const unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.unitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            // Don't show stanzaIndex if it's the only one of its kind.
            if (stanzaTypeCounters[stanzaType] === 1) {
                unitMapObject.stanzaIndex = -1
            }
        }
    })

    // Not needed after each unit is told its index.
    delete song.stanzaTypeCounters
}

/***********
 * HELPERS *
 ***********/

export const recurseToFindAnchors = ({

    inVerseWithTime = -1,
    registerVerseTimes = false,
    song,
    verseObject,
    lyric = verseObject,
    textKey,
    callbackFunction

}) => {

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (registerVerseTimes && !isNaN(lyric.time)) {
        // All recursed lyrics will know they're nested in verse with time.

        inVerseWithTime = lyric.time

        // Add index to verse object.
        lyric.verseIndex = song.verseIndexCounter

        // Add most recent annotation index.
        lyric.lastAnnotationIndex = song.annotations.length

        // Add verse time to song times.
        song.verseTimes.push(lyric.time)

        song.verseIndexCounter++
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyric)) {

        lyric.forEach(childLyric => {
            recurseToFindAnchors({
                inVerseWithTime,
                registerVerseTimes,
                song,
                verseObject,
                lyric: childLyric,
                textKey,
                callbackFunction
            })
        })

    } else if (typeof lyric === 'object') {

        if (lyric[ANCHOR]) {
            callbackFunction({
                inVerseWithTime,
                song,
                verseObject,
                lyric,
                textKey
            })

        } else {
            ALBUM_BUILD_KEYS.forEach(childTextKey => {

                if (lyric[childTextKey]) {

                    // TODO: Not sure what this is doing exactly...
                    let sideStanzaTextKey =
                        (lyric[LEFT_COLUMN] && LEFT_COLUMN) ||
                        (lyric[RIGHT_COLUMN] && RIGHT_COLUMN)

                    recurseToFindAnchors({
                        inVerseWithTime,
                        registerVerseTimes,
                        song,
                        verseObject,
                        lyric: lyric[childTextKey],
                        textKey: (textKey || sideStanzaTextKey || childTextKey),
                        callbackFunction
                    })
                }
            })
        }
    }
}
