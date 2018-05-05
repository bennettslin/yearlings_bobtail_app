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
                return hasSideStanzas ||
                Boolean(verse[TOP_SIDE_STANZA]) ||
                Boolean(verse[BOTTOM_SIDE_STANZA])
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
        sliderStanzasArray = []

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
                sliderStanzasArray.push({
                    verseTimes: [
                        unitFirstVerseTime
                    ],
                    type: stanzaType
                })

                tempStanzaTypeCounters[stanzaType] = (
                    tempStanzaTypeCounters[stanzaType] || 0
                ) + 1
            }

            // Tell unit its stanza index.
            unitMapObject.stanzaIndex = tempStanzaTypeCounters[stanzaType]
        }
    })

    // Establish which song on the album has the most stanzas.
    if (sliderStanzasArray.length > albumObject.maxStanzasCount) {
        albumObject.maxStanzasCount = sliderStanzasArray.length
    }

    songObject.sliderStanzasArray = sliderStanzasArray
    songObject.tempStanzaTypeCounters = tempStanzaTypeCounters
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
        songObject.adminDotStanzasCount++
    }
}

/*********
 * FINAL *
 *********/

export const finalRegisterStanzaTypes = (songObject) => {

    const { lyrics,
            tempStanzaTypeCounters } = songObject

    lyrics.forEach((unitArray) => {

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
    albumObject,
    songObject,
    verseObject,
    lyricEntity = verseObject,
    textKey,
    callbackFunction,
    stanzaIndex = 0,
    verseTimesCounter

}) => {

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (verseTimesCounter && !isNaN(lyricEntity.time)) {

        // Add verse time.
        const { sliderStanzasArray } = songObject

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = songObject.tempVerseIndexCounter

        // Add index to verse object.
        lyricEntity.verseIndex = songObject.tempVerseIndexCounter

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = songObject.annotations.length

        // Get stanza for this verse.
        while (
            stanzaIndex < sliderStanzasArray.length - 1 &&
            lyricEntity.time >=
                sliderStanzasArray[stanzaIndex + 1].verseTimes[0]
        ) {
            stanzaIndex++
        }

        verseTimesCounter.counter++

        // Add subsequent verse times to stanza's array of verse times.
        if (
            sliderStanzasArray[stanzaIndex].verseTimes[0] !== lyricEntity.time
        ) {
            sliderStanzasArray[stanzaIndex].verseTimes.push(lyricEntity.time)
        }

        // Tell stanza its first verse index.
        if (isNaN(sliderStanzasArray[stanzaIndex].firstVerseIndex)) {
            sliderStanzasArray[stanzaIndex].firstVerseIndex =
                lyricEntity.verseIndex

            /**
             * Since this is the first verse of the next stanza, tell the
             * previous stanza its end time.
             */
            if (stanzaIndex) {
                sliderStanzasArray[stanzaIndex - 1].endTime = lyricEntity.time
            }
        }

        if (
            stanzaIndex === sliderStanzasArray.length - 1 &&
            !sliderStanzasArray[stanzaIndex].endTime
        ) {
            sliderStanzasArray[stanzaIndex].endTime = songObject.totalTime
        }

        // An array of verse times is needed.
        songObject.verseTimes.push(lyricEntity.time)

        songObject.tempVerseIndexCounter++

    /**
     * Now that we have access to the entire verseTimes array, let each verse
     * know its end time.
     */
    } else if (!isNaN(lyricEntity.time)) {

        const { verseIndex } = lyricEntity,
            { verseTimes } = songObject

        // Its end time is the start time of the next verse.
        if (verseIndex < verseTimes.length - 1) {
            lyricEntity.endTime = verseTimes[verseIndex + 1]

        // Its end time is the song's end time.
        } else {
            lyricEntity.endTime = songObject.totalTime
        }
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            recurseToFindAnchors({
                inVerseWithTimeIndex,
                albumObject,
                songObject,
                verseObject,
                lyricEntity: childEntity,
                textKey,
                callbackFunction,
                stanzaIndex,
                verseTimesCounter
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
                        albumObject,
                        songObject,
                        verseObject,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || sideStanzaTextKey || childKey),
                        callbackFunction,
                        stanzaIndex,
                        verseTimesCounter
                    })
                }
            })
        }
    }
}
