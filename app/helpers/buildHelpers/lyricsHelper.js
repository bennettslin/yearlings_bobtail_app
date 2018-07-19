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

    const { title, lyricUnits } = songObject,
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
    if (lyricUnits[0][lyricUnits[0].length - 1].isUnitMap && lyricUnits[0].length === 1) {
        lyricUnits[0].unshift(titleObject)

    // Otherwise, create a new first unit that just contains the title.
    } else {
        lyricUnits.unshift([titleObject])
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

    const { lyricUnits } = songObject
    let songHasSideStanzas = false

    lyricUnits.forEach(unit => {

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

    const { lyricUnits } = songObject,
        tempStanzaTypeCounters = {},

        /**
         * This allows easy access to stanza metadata, without having to
         * traverse lyrics.
         */
        songStanzaConfigs = []

    lyricUnits.forEach(unitArray => {

        const unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.isUnitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            // If it's not a subsequent stanza, establish new index.
            if (!unitMapObject.subsequent) {


                /**
                 * This will let audio slider know the relative width of
                 * each unit, based on its time length.
                 */
                songStanzaConfigs.push({
                    stanzaVerseConfigs: [{
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

            // Tell unit and subsequent units their stanza index.
            unitMapObject.stanzaIndex = songStanzaConfigs.length - 1

            // Tell unit its stanza type index.
            unitMapObject.stanzaTypeIndex = tempStanzaTypeCounters[stanzaType]
        }
    })

    songObject.songStanzaConfigs = songStanzaConfigs
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

    const { lyricUnits,
            tempStanzaTypeCounters } = songObject

    lyricUnits.forEach((unitArray) => {

        const unitMapObject = unitArray[unitArray.length - 1]

        if (unitMapObject.isUnitMap && unitMapObject.stanzaType) {

            const { stanzaType } = unitMapObject

            // Don't show stanzaTypeIndex if it's the only one of its kind.
            if (tempStanzaTypeCounters[stanzaType] === 1) {
                unitMapObject.stanzaTypeIndex = -1
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
            songStanzaConfigs,
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
            stanzaIndex < songStanzaConfigs.length - 1 &&
            lyricEntity.time >=
                songStanzaConfigs[stanzaIndex + 1]
                    .stanzaVerseConfigs[0]
                    .verseStartTime
        ) {
            stanzaIndex++
        }

        const sliderStanzaConfig = songStanzaConfigs[stanzaIndex],
            stanzaFirstVerseConfig = sliderStanzaConfig.stanzaVerseConfigs[0]

        if (isNaN(stanzaFirstVerseConfig.verseIndex)) {
            /**
             * The array is initialised with a verse object that is missing
             * its verse index. So just add the verse index.
             */
            stanzaFirstVerseConfig.verseIndex = tempVerseIndexCounter

        } else {
            sliderStanzaConfig.stanzaVerseConfigs.push(
                {
                    verseIndex: tempVerseIndexCounter,

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
            sliderStanzaConfig.stanzaVerseConfigs.length === 1
        ) {
            songStanzaConfigs[stanzaIndex - 1].stanzaEndTime =
                    lyricEntity.time
        }

        // Tell the last stanza its end time.
        if (
            stanzaIndex === songStanzaConfigs.length - 1
        ) {
            sliderStanzaConfig.stanzaEndTime =
                songObject.totalTime
        }

        // FIXME: Eventually should not need this.
        if (
            songObject.songVerseConfigs.length > 0 &&
            lyricEntity.time <=
                songObject.songVerseConfigs[
                    songObject.songVerseConfigs.length - 1
                ].verseStartTime
        ) {
            /**
             * Throw an exception if next time is not later than previous time.
             * This should, of course, never happen.
             */
            // eslint-disable-next-line no-throw-literal
            throw 'Verse time can never be earlier or same as previous one!'
        }

        // An array of verse times is needed.
        songObject.songVerseConfigs.push({
            verseStartTime: lyricEntity.time,
            stanzaIndex
        })

        songObject.tempVerseIndexCounter++

    /**
     * Now that we have access to the entire songVerseConfigs array, let each
     * lyric entity know its end time. This is for a verse in a lyric stanza to
     * pass to its verse cursor.
     */
    } else if (!isNaN(lyricEntity.time)) {

        const { verseIndex } = lyricEntity,
            { songVerseConfigs } = songObject

        // Its end time is the start time of the next verse.
        if (verseIndex < songVerseConfigs.length - 1) {
            lyricEntity.endTime =
                songVerseConfigs[verseIndex + 1].verseStartTime

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
