// Parse lyric data for build.

import {
    ALBUM_BUILD_KEYS,
    ANCHOR,
    DOT_CARD,
    LEFT_COLUMN,
    RIGHT_COLUMN
} from 'constants/lyrics'

export const registerAdminDotStanzas = (songObject, verseObject) => {

    // For admin purposes.
    if (verseObject[DOT_CARD]) {
        songObject.adminDotStanzasCount++
    }
}

/*********
 * FINAL *
 *********/

/***********
 * HELPERS *
 ***********/

/**
 * This method is way overloaded.
 */
export const recurseToFindAnchors = ({

    unitIndex = -1,
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

    const { time } = lyricEntity

    /**
     * Only register lyric objects associated with a song time. This is
     * typically the verse object itself, but sometimes it's a sub stanza.
     */
    if (verseTimesCounter && !isNaN(time)) {

        // For future recursion.
        verseTimesCounter.counter++

        const {
            songStanzaConfigs,
            tempVerseIndexCounter,
            annotations
        } = songObject

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = tempVerseIndexCounter

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        // Get stanza for this verse.
        while (
            stanzaIndex < songStanzaConfigs.length - 1 &&
            time >=
                songStanzaConfigs[stanzaIndex + 1]
                    .stanzaVerseConfigs[0]
                    .verseStartTime
        ) {
            stanzaIndex++
        }

        const songStanzaConfig = songStanzaConfigs[stanzaIndex],
            {
                stanzaVerseConfigs,
                stanzaUnitIndices
            } = songStanzaConfig,
            stanzaFirstVerseConfig = stanzaVerseConfigs[0]

        // Tell stanza that it owns this unit.
        if (
            stanzaUnitIndices.length === 0 ||
            stanzaUnitIndices[stanzaUnitIndices.length - 1] < unitIndex
        ) {
            stanzaUnitIndices.push(unitIndex)
        }

        if (isNaN(stanzaFirstVerseConfig.verseIndex)) {
            /**
             * The array is initialised with a verse object that already knows
             * its start time. So just add the verse index.
             */
            stanzaFirstVerseConfig.verseIndex = tempVerseIndexCounter

        } else {
            // Tell the previous verse its duration.
            const previousVerseConfig =
                stanzaVerseConfigs[stanzaVerseConfigs.length - 1]

            previousVerseConfig.verseDuration =
                time - previousVerseConfig.verseStartTime

            stanzaVerseConfigs.push(
                {
                    verseIndex: tempVerseIndexCounter,

                    /**
                     * Technically, we can just get the verse start time from
                     * the song's verse start times. However, we'll do it this
                     * way so that slider children can get the start time from
                     * the stanza verse object directly. At least for now, as
                     * it's already set up to work this way.
                     */
                    verseStartTime: time
                }
            )
        }

        /**
         * If this isn't the last verse of the last stanza, then this value
         * will get overwritten. Otherwise, it is accurate.
         */
        stanzaVerseConfigs[stanzaVerseConfigs.length - 1].verseDuration =
            songObject.totalTime - time

        /**
         * If this is the first verse of the next stanza, tell the
         * previous stanza its end time, and its last verse its duration.
         */
        if (
            stanzaIndex > 0 &&
            stanzaVerseConfigs.length === 1
        ) {
            const
                previousStanzaConfig = songStanzaConfigs[stanzaIndex - 1],
                previousStanzaLastVerseConfig =
                    previousStanzaConfig.stanzaVerseConfigs[
                        previousStanzaConfig.stanzaVerseConfigs.length - 1
                    ]

            previousStanzaConfig.stanzaEndTime = time
            previousStanzaLastVerseConfig.verseDuration =
                    time - previousStanzaLastVerseConfig.verseStartTime
        }

        // Tell the last stanza its end time.
        if (
            stanzaIndex === songStanzaConfigs.length - 1
        ) {
            songStanzaConfig.stanzaEndTime =
                songObject.totalTime
        }

        // FIXME: Eventually should not need this.
        if (
            songObject.songVerseConfigs.length > 0 &&
            time <=
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

        /**
         * This repeats some code. Overwrite the verseDuration of the previous
         * verse config.
         */
        if (songObject.songVerseConfigs.length > 0) {
            const previousVerseConfig = songObject.songVerseConfigs[
                songObject.songVerseConfigs.length - 1
            ]

            previousVerseConfig.verseDuration =
                time - previousVerseConfig.verseStartTime
        }

        songObject.songVerseConfigs.push({
            stanzaIndex,
            verseStartTime: time,

            /**
             * This repeats some code. This is only accurate for the last
             * verse, and gets overwritten otherwise.
             */
            verseDuration: songObject.totalTime - time
        })

        songObject.tempVerseIndexCounter++
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
