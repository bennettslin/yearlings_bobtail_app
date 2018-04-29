// Static field that shows the song scenes in the slider. Probably admin only.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const sliderVersePropTypes = {
    totalTime: PropTypes.number.isRequired,
    verseIndex: PropTypes.number.isRequired,
    verseTimeObject: PropTypes.object.isRequired
},

SliderVerse = ({

    totalTime,
    verseIndex,
    verseTimeObject

}) => {

    const { time: verseTime,
        stanzaType } = verseTimeObject

    // Don't show title verse.
    if (verseTime < 0) {
        return null
    }

    const verseWidth =
            (totalTime - verseTime) / totalTime * 100,

        verseStyle = {
            width: `${verseWidth}%`
        },

        isOdd = verseIndex % 2

    return (
        <div
            key={verseIndex}
            className={cx(
                'SliderVerseBar',
                'Slider__dynamicBar',

                isOdd ?
                    'SliderVerseBar__odd' :
                    'SliderVerseBar__even',

                `bgColour__stanza__${stanzaType}`
            )}
            style={verseStyle}
        />
    )
}

SliderVerse.propTypes = sliderVersePropTypes

export default SliderVerse
