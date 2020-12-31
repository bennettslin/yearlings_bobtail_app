// Static field that shows the song scenes in the slider. Probably admin only.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getVerseHoc from '../../../../../VerseHoc'
import './style'

const SliderVerse = ({
    className,
    relativeStartTime,
    verseDuration,
    stanzaDuration,
    verseIndex,
    isLastVerseOfStanza,
    children,

}) => {
    const
        /**
         * Round left down, and width up, to ensure that there are no gaps
         * between slider verses.
         */
        verseLeft = (
            relativeStartTime / stanzaDuration * 100
        ),

        verseWidth = Math.ceil(
            verseDuration / stanzaDuration * 100
        ),

        /**
         * Prevent weird gaps depending on screen width. Not needed for the
         * last verse in each stanza.
         */
        bleedMargin = isLastVerseOfStanza ? 0 : 1,

        verseStyle = {
            left: `${verseLeft}%`,
            width: `${verseWidth + bleedMargin}%`,
        }

    return (
        <div
            {...{
                key: verseIndex,
                className: cx(
                    'SliderVerse',

                    // Just for debug purposes.
                    `sliderVerse__${verseIndex}`,

                    'abF',

                    className
                ),
                style: verseStyle,
            }}
        >
            {children}
        </div>
    )
}

SliderVerse.propTypes = {
    className: PropTypes.string.isRequired,
    verseIndex: PropTypes.number.isRequired,
    isLastVerseOfStanza: PropTypes.bool.isRequired,
    relativeStartTime: PropTypes.number.isRequired,
    verseDuration: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getVerseHoc(SliderVerse))
