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
        sliderStanzaObjects = []

    lyrics.forEach(unitArray => {

        const unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.unitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            // If it's not a subsequent stanza, establish new index.
            if (!unitMapObject.subsequent) {

                /**
                 * This will let audio slider know the relative width of
                 * each unit, based on its time length.
                 */
                sliderStanzaObjects.push({
                    stanzaVerseObjects: [{
                        /**
                         * Initialise with just the start time, because at this
                         * point we still don't know the verse index.
                         */
                        verseStartTime: unitArray[0].time
                    }],
                    stanzaType
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
    if (sliderStanzaObjects.length > albumObject.maxStanzasCount) {
        albumObject.maxStanzasCount = sliderStanzaObjects.length
    }

    songObject.sliderStanzaObjects = sliderStanzaObjects
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

        // For future recursion.
        verseTimesCounter.counter++

        const {
            sliderStanzaObjects,
            tempVerseIndexCounter,
            annotations
        } = songObject

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = tempVerseIndexCounter

        // Add index to verse object.
        lyricEntity.verseIndex = tempVerseIndexCounter

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        // Get stanza for this verse.
        while (
            stanzaIndex < sliderStanzaObjects.length - 1 &&
            lyricEntity.time >=
                sliderStanzaObjects[stanzaIndex + 1]
                    .stanzaVerseObjects[0]
                    .verseStartTime
        ) {
            stanzaIndex++
        }

        const sliderStanzaObject = sliderStanzaObjects[stanzaIndex]

        // Just for administrative purposes, at least for now.
        sliderStanzaObject.stanzaIndex = stanzaIndex

        if (isNaN(sliderStanzaObject.stanzaVerseObjects[0].verseIndex)) {
            /**
             * The array is initialised with a verse object that is missing
             * its verse index. So just add the verse index.
             */
            sliderStanzaObject.stanzaVerseObjects[0].verseIndex = lyricEntity.verseIndex

        } else {
            sliderStanzaObject.stanzaVerseObjects.push(
                {
                    verseIndex: lyricEntity.verseIndex,

                    /**
                     * Technically, we can just get the verse start time from
                     * the song's verse start times. However, we'll do it this
                     * way so that slider children can get the start time from
                     * the stanza verse object directly. At least for now.
                     */
                    verseStartTime: lyricEntity.time
                }
            )
        }

        /**
         * If this is the first verse of the next stanza, tell the
         * previous stanza its end time.
         */
        if (
            stanzaIndex > 0 &&
            sliderStanzaObject.stanzaVerseObjects.length === 1
        ) {
            sliderStanzaObjects[stanzaIndex - 1].stanzaEndTime =
                    lyricEntity.time
        }

        // Tell the last stanza its end time.
        if (
            stanzaIndex === sliderStanzaObjects.length - 1
        ) {
            sliderStanzaObject.stanzaEndTime =
                songObject.totalTime
        }

        if (
            lyricEntity.time <=
                songObject.verseStartTimes[
                    songObject.verseStartTimes.length - 1
                ]
        ) {
            /**
             * Throw an exception if next time is not later than previous time.
             * This should, of course, never happen.
             */
            // eslint-disable-next-line no-throw-literal
            throw 'Verse time can never be earlier or same as previous one!'
        }

        // An array of verse times is needed.
        songObject.verseStartTimes.push(lyricEntity.time)

        songObject.tempVerseIndexCounter++

    /**
     * Now that we have access to the entire verseStartTimes array, let each verse
     * know its end time.
     */
    } else if (!isNaN(lyricEntity.time)) {

        const { verseIndex } = lyricEntity,
            { verseStartTimes } = songObject

        // Its end time is the start time of the next verse.
        if (verseIndex < verseStartTimes.length - 1) {
            lyricEntity.endTime = verseStartTimes[verseIndex + 1]

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
