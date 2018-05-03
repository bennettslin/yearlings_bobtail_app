import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseController from '../../Verse/VerseController'

const sliderStanzaPropTypes = {
    firstVerseIndex: PropTypes.number.isRequired,
    verseTimes: PropTypes.array.isRequired,
    endTime: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}

const SliderStanza = ({

    firstVerseIndex,
    verseTimes,
    endTime,
    totalTime,
    type

}) => {

    /**
     * Width of stanza is exactly proportionate to its duration within the
     * song. However, each stanza then adds a margin of fixed width. As such,
     * its verse widths remain proportionate to their duration within the
     * stanza, but *not* within the song.
     */
    const stanzaWidth = (endTime - verseTimes[0]) / totalTime * 100,

        stanzaRight = (totalTime - endTime) / totalTime * 100,

        stanzaStyle = {
            right: `${stanzaRight}%`,
            width: `${stanzaWidth}%`
        }

    return (
        <div
            className={cx(
                'SliderStanza',
                'Slider__dynamicBar',
                `bgColour__stanza__${type}`,
                'flexCentreContainer'
            )}
            style={stanzaStyle}
        >
            <div className="SliderStanzaVerses">
                {verseTimes.map((verseTime, index) => {

                    // Slider verses only know time relative to stanza.
                    const relativeTotalTime = endTime - verseTimes[0],
                        relativeVerseTime = verseTime - verseTimes[0]

                    return (
                        <VerseController
                            key={index}
                            verseTime={relativeVerseTime}
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
