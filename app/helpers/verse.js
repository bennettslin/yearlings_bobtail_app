import { getSongTotalTime } from '../album/api/time'
import {
    getStanzaIndicesArray,
    getStanzaVerseConfigs,
    getStanzaEndTime
} from '../album/api/stanzas'

export const getVerseIndexforRatio = (
    songIndex,
    touchInElementRatio

) => {
    const stanzaIndicesArray = getStanzaIndicesArray(songIndex),

        totalTime = getSongTotalTime(songIndex),

        // Figure out which stanza the touch is in.
        stanzaIndex = stanzaIndicesArray.findIndex(
            (nothing, index) => {

                // If it's the last stanza, just return true.
                if (index === stanzaIndicesArray.length - 1) {
                    return true
                }

                const endTime = getStanzaEndTime(songIndex, index),

                    endRatio = endTime / totalTime,

                    // Stanza's end ratio should be greater than touch ratio.
                    isTouchInStanza = endRatio > touchInElementRatio

                return isTouchInStanza
            }
        ),

        stanzaVerseConfigs = getStanzaVerseConfigs(
            songIndex,
            stanzaIndex
        ),

        // Get needed values for stanza.
        stanzaEndTime = getStanzaEndTime(songIndex, stanzaIndex),

        stanzaFirstVerseIndex = stanzaVerseConfigs[0].verseIndex

    // If there is only one verse in this stanza, just return its index.
    if (stanzaVerseConfigs.length === 1) {
        return stanzaFirstVerseIndex
    }

    const stanzaStartTime = stanzaVerseConfigs[0].verseStartTime,
        stanzaStartRatio = stanzaStartTime / totalTime,
        stanzaEndRatio = stanzaEndTime / totalTime,

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
        verseTimesIndex = stanzaVerseConfigs.findIndex(
            (verseTime, index) => {

                // If it's the last verse, just return true.
                if (index === stanzaVerseConfigs.length - 1) {
                    return true
                }

                const verseEndRatio =
                        (stanzaVerseConfigs[index + 1].verseStartTime - stanzaStartTime) / totalStanzaTime,

                    // Verse's end ratio should be greater than touch ratio.
                    isTouchInVerse = verseEndRatio > touchInStanzaRatio

                return isTouchInVerse
            }
        ),

        // Add stanza's first verse index with the returned verse times index.
        verseIndex = stanzaFirstVerseIndex + verseTimesIndex

    return verseIndex
}

export const getCursorIndex = (
    sliderIndex,
    activatedIndex,
    defaultIndex
) => {
    if (sliderIndex >= 0) {
        return sliderIndex
    } else if (activatedIndex >= 0) {
        return activatedIndex
    } else {
        return defaultIndex
    }
}
