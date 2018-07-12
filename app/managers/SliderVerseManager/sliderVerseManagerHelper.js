import findIndex from 'lodash.findindex'
import { LS_MARGIN_SLIDER_THIN } from '../../constants/responsive'

import {
    getSongTotalTime,
    getSliderStanzasArray
} from '../../helpers/dataHelper'

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

    const sliderStanzasArray = getSliderStanzasArray(songIndex),
        totalTime = getSongTotalTime(songIndex),
        lastStanzaIndex = sliderStanzasArray.length - 1,

        // Figure out which stanza the touch is in.
        stanzaIndex = findIndex(sliderStanzasArray, (stanzaObject, index) => {

            // If it's the last stanza, just return true.
            if (index === lastStanzaIndex) {
                return true
            }

            const stanzaEndRatio = stanzaObject.endTime / totalTime,

                // Stanza's end ratio should be greater than touch ratio.
                isTouchInStanza = stanzaEndRatio > touchInSliderRatio

            return isTouchInStanza
        }),

        // Get needed values for stanza.
        { verseTimes,
          endTime,
          firstVerseIndex } = sliderStanzasArray[stanzaIndex]

    // If verse times length is 1, just return the first verse.
    if (verseTimes.length === 1) {
        return firstVerseIndex
    }

    const stanzaStartRatio = verseTimes[0] / totalTime,
        stanzaEndRatio = endTime / totalTime,

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
         * All stanzas have a left margin. Only the last stanza has a right
         * margin.
         */
        startMarginWidth = LS_MARGIN_SLIDER_THIN,
        endMarginWidth = stanzaIndex === lastStanzaIndex ?
            LS_MARGIN_SLIDER_THIN : 0,

        versesWidth = stanzaWidth - startMarginWidth - endMarginWidth,
        touchInVersesWidth = touchInStanzaWidth - startMarginWidth,

        /**
         * This is the ratio that will accurately tell us the verse that the
         * touch is in.
         */
        touchInVersesRatio = touchInVersesWidth / versesWidth,
        totalStanzaTime = endTime - verseTimes[0],

        // Now figure out which verse the touch is in.
        verseTimesIndex = findIndex(verseTimes, (verseTime, index) => {

                // If it's the last verse, just return true.
                if (index === verseTimes.length - 1) {
                    return true
                }

                const verseEndRatio =
                    (verseTimes[index + 1] - verseTimes[0]) / totalStanzaTime,

                    // Verse's end ratio should be greater than touch ratio.
                    isTouchInVerse = verseEndRatio > touchInVersesRatio

                return isTouchInVerse
            }
        ),

        // Add stanza's first verse index with the returned verse times index.
        verseIndex = firstVerseIndex + verseTimesIndex

    return verseIndex
}
