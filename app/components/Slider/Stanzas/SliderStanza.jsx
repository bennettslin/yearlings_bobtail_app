import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseController from '../../Verse/VerseController'
import { LS_MARGIN_SLIDER_THIN } from '../../../constants/responsive'

const sliderStanzaPropTypes = {
    isLastStanza: PropTypes.bool.isRequired,
    firstVerseIndex: PropTypes.number.isRequired,
    verseTimes: PropTypes.array.isRequired,
    endTime: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}

const SliderStanza = ({

    isLastStanza,
    firstVerseIndex,
    verseTimes,
    endTime,
    totalTime,
    type

}) => {

    /**
     * Width of stanza is exactly proportionate to its duration within the
     * song. However, each stanza then adds padding of fixed width. As such,
     * its verse widths remain proportionate to their duration within the
     * stanza, but *not* within the song.
     */
    const
        stanzaRightPercentage = (totalTime - endTime) / totalTime * 100,
        formattedStanzaRight = isLastStanza ?
            `${stanzaRightPercentage}%` :
            `calc(${stanzaRightPercentage}% - ${LS_MARGIN_SLIDER_THIN}px)`,

        /**
         * Stanza width ends where the next one begins. Its right padding that
         * gets overlapped by the next stanza is not included in any slider
         * touch calculations. Since the last stanza is not overlapped, its
         * right padding is considered part of its overall width.
         */

        stanzaWidthPercentage = (endTime - verseTimes[0]) / totalTime * 100,
        formattedStanzaWidth = isLastStanza ?
            `${stanzaWidthPercentage}%` :
            `calc(${stanzaWidthPercentage}% + ${LS_MARGIN_SLIDER_THIN}px)`,

        stanzaStyle = {
            right: formattedStanzaRight,
            width: formattedStanzaWidth
        },

        // Slider verses only know time relative to stanza.
        relativeTotalTime = endTime - verseTimes[0]

    return (
        <div
            className={cx(
                'SliderStanza',
                'Slider__dynamicBar',
                `SliderStanza__${type}`,
                `bgColour__stanza__${type}`,
                'flexCentreContainer'
            )}
            style={stanzaStyle}
        >
            <div className="SliderStanzaVerses">
                {verseTimes.map((verseTime, index) => {

                    const relativeStartTime = verseTime - verseTimes[0]

                    return (
                        <VerseController
                            key={index}
                            startTime={relativeStartTime}
                            totalTime={relativeTotalTime}
                            verseIndex={firstVerseIndex + index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

SliderStanza.propTypes = sliderStanzaPropTypes

export default SliderStanza
