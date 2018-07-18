import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderVerse from './SliderVerse'

const propTypes = {
    firstVerseIndex: PropTypes.number.isRequired,
    stanzaVerseObjects: PropTypes.array.isRequired,

    stanzaStartTime: PropTypes.number.isRequired,
    stanzaEndTime: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired
}

const SliderVerses = ({

    firstVerseIndex,
    stanzaVerseObjects,

    stanzaStartTime,
    stanzaEndTime,
    stanzaDuration

}) => {

    return (
        <div className={cx(
            'SliderVerses'
        )}>
            {stanzaVerseObjects.map((verseTime, index) => {

                /**
                 * Slider verses are not concerned with their times
                 * respective to the song's total time. They only know
                 * their times relative to the stanza.
                 */
                const
                    relativeStartTime = verseTime - stanzaStartTime,

                    /**
                     * If it's the last verse, its relative end time is
                     * the stanza's relative total time. Otherwise,
                     * it's the next verse's start time.
                     */
                    relativeEndTime =
                        index === stanzaVerseObjects.length - 1 ?
                            stanzaDuration :
                            stanzaVerseObjects[index + 1] - stanzaStartTime,

                    // Pass absolute times for slider cursor.
                    // FIXME: This maybe shouldn't be needed eventually?
                    absoluteEndTime =
                        index === stanzaVerseObjects.length - 1 ?
                            stanzaEndTime :
                            stanzaVerseObjects[index + 1]

                return (
                    <SliderVerse
                        key={index}
                        {...{
                            verseIndex: firstVerseIndex + index,
                            relativeStartTime,
                            relativeEndTime,
                            stanzaDuration,

                            startTime: verseTime,
                            stanzaEndTime: absoluteEndTime
                        }}
                    />
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = propTypes

export default SliderVerses
