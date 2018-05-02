import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseController from '../Verse/VerseController'

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
                `bgColour__stanza__${type}`
            )}
            style={stanzaStyle}
        >
            {verseTimes.map((verseTime, index) => (
                <VerseController
                    key={index}
                    totalTime={endTime - verseTimes[0]}
                    verseIndex={firstVerseIndex + index}
                    verseTime={verseTime}
                />
            ))}
        </div>
    )
}

SliderStanza.propTypes = sliderStanzaPropTypes

export default SliderStanza
