import findIndex from 'lodash.findindex'
import { LS_MARGIN_X_SLIDER } from 'constants/responsive'

import {
    getSongTotalTime,
    getSongStanzaConfigs
} from 'helpers/dataHelper'

export const getSliderRatioForClientX = (clientX, sliderLeft, sliderWidth) => {
    const sliderX = clientX - sliderLeft,
        ratio = sliderX / sliderWidth

    if (ratio < 0) {
        return 0
    } else if (ratio > 1) {
        return 1
    } else {
        return ratio
    }
}

export const getVerseIndexforRatio = (

    songIndex,
    touchInSliderRatio,
    sliderWidth

) => {

    const songStanzaConfigs = getSongStanzaConfigs(songIndex),

        totalTime = getSongTotalTime(songIndex),

        // Figure out which stanza the touch is in.
        stanzaIndex = findIndex(songStanzaConfigs, (stanzaObject, index) => {

            // If it's the last stanza, just return true.
            if (index === songStanzaConfigs.length - 1) {
                return true
            }

            const stanzaEndRatio = stanzaObject.stanzaEndTime / totalTime,

                // Stanza's end ratio should be greater than touch ratio.
                isTouchInStanza = stanzaEndRatio > touchInSliderRatio

            return isTouchInStanza
        }),

        // Get needed values for stanza.
        {
            stanzaVerseConfigs,
            stanzaEndTime
        } = songStanzaConfigs[stanzaIndex],

        stanzaFirstVerseIndex = stanzaVerseConfigs[0].verseIndex

    // If there is only one verse in this stanza, just return its index.
    if (stanzaVerseConfigs.length === 1) {
        return stanzaFirstVerseIndex
    }

    const stanzaStartTime = stanzaVerseConfigs[0].verseStartTime,
        stanzaStartRatio = stanzaStartTime / totalTime,
        stanzaEndRatio = stanzaEndTime / totalTime,

        // Width of stanza relative to slider.
        stanzaWidthRatio = stanzaEndRatio - stanzaStartRatio,

        // Get ratio of touch in stanza.
        touchInStanzaRatio =
            (touchInSliderRatio - stanzaStartRatio) / stanzaWidthRatio,

        /**
         * Get touch in verses ratio. Verses width is stanza width minus its
         * margins.
         */
        stanzaWidth = stanzaWidthRatio * sliderWidth,
        touchInStanzaWidth = touchInStanzaRatio * stanzaWidth,

        /**
         * All stanzas have a left margin.
         */
        startMarginWidth = LS_MARGIN_X_SLIDER,

        versesWidth = stanzaWidth - startMarginWidth,
        touchInVersesWidth = touchInStanzaWidth - startMarginWidth,

        /**
         * This is the ratio that will accurately tell us the verse that the
         * touch is in.
         */
        touchInVersesRatio = touchInVersesWidth / versesWidth,
        totalStanzaTime = stanzaEndTime - stanzaStartTime,

        // Now figure out which verse the touch is in.
        verseTimesIndex = findIndex(stanzaVerseConfigs, (verseTime, index) => {

            // If it's the last verse, just return true.
            if (index === stanzaVerseConfigs.length - 1) {
                return true
            }

            const verseEndRatio =
                    (stanzaVerseConfigs[index + 1].verseStartTime - stanzaStartTime) / totalStanzaTime,

                // Verse's end ratio should be greater than touch ratio.
                isTouchInVerse = verseEndRatio > touchInVersesRatio

            return isTouchInVerse
        }
        ),

        // Add stanza's first verse index with the returned verse times index.
        verseIndex = stanzaFirstVerseIndex + verseTimesIndex

    return verseIndex
}
