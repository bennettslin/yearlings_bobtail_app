import {
    getDurationForSong,
    getStartTimeForVerse,
    getStartTimeForStanza,
    getEndTimeForStanza,
} from '../api/album/time'
import {
    getStanzaIndices,
    getVerseIndicesForStanza,
} from '../api/album/stanzas'

export const getVerseIndexforRatio = (
    songIndex,
    touchInElementRatio

) => {
    const stanzaIndices = getStanzaIndices(songIndex),

        songDuration = getDurationForSong(songIndex),

        // Figure out which stanza the touch is in.
        stanzaIndex = stanzaIndices.findIndex(
            (nothing, index) => {

                // If it's the last stanza, just return true.
                if (index === stanzaIndices.length - 1) {
                    return true
                }

                const endTime = getEndTimeForStanza(songIndex, index),

                    endRatio = endTime / songDuration,

                    // Stanza's end ratio should be greater than touch ratio.
                    isTouchInStanza = endRatio > touchInElementRatio

                return isTouchInStanza
            }
        ),
        stanzaVerseIndices = getVerseIndicesForStanza(
            songIndex,
            stanzaIndex
        ),

        // Get needed values for stanza.
        stanzaEndTime = getEndTimeForStanza(songIndex, stanzaIndex),

        stanzaFirstVerseIndex = stanzaVerseIndices[0]

    // If there is only one verse in this stanza, just return its index.
    if (stanzaVerseIndices.length === 1) {
        return stanzaFirstVerseIndex
    }

    const stanzaStartTime = getStartTimeForStanza(songIndex, stanzaIndex),
        stanzaStartRatio = stanzaStartTime / songDuration,
        stanzaEndRatio = stanzaEndTime / songDuration,

        // Width of stanza relative to element.
        stanzaWidthRatio = stanzaEndRatio - stanzaStartRatio,

        /**
         * Get ratio of touch in stanza. This is the ratio that will accurately
         * tell us the verse that the touch is in.
         */
        touchInStanzaRatio =
            (touchInElementRatio - stanzaStartRatio) / stanzaWidthRatio,

        totalStanzaTime = stanzaEndTime - stanzaStartTime,

        // Now figure out which verse the touch is in.
        stanzaVerseIndex = stanzaVerseIndices.findIndex(
            (verseIndex, index) => {

                // If it's the last verse, just return true.
                if (index === stanzaVerseIndices.length - 1) {
                    return true
                }

                const verseEndRatio =
                        (
                            getStartTimeForVerse(songIndex, verseIndex + 1) - stanzaStartTime
                        ) / totalStanzaTime,

                    // Verse's end ratio should be greater than touch ratio.
                    isTouchInVerse = verseEndRatio > touchInStanzaRatio

                return isTouchInVerse
            }
        ),

        // Add stanza's first verse index with the returned verse times index.
        verseIndex = stanzaFirstVerseIndex + stanzaVerseIndex

    return verseIndex
}
