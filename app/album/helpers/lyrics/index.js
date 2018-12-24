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
            tempVerseIndexCounter,
            annotations
        } = songObject

        // All recursed lyrics will know they're nested in verse with time.
        inVerseWithTimeIndex = tempVerseIndexCounter

        // Add most recent annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

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
