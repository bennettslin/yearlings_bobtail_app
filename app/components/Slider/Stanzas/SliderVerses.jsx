import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderVerse from './SliderVerse'

const propTypes = {
    stanzaVerseObjects: PropTypes.array.isRequired,
    stanzaEndTime: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired
}

const SliderVerses = ({

    stanzaVerseObjects,

    stanzaEndTime,
    stanzaDuration

}) => {

    const stanzaFirstVerseIndex = stanzaVerseObjects[0].verseIndex,
        stanzaStartTime = stanzaVerseObjects[0].verseStartTime

    return (
        <div className={cx(
            'SliderVerses'
        )}>
            {stanzaVerseObjects.map((verseObject, index) => {

                /**
                 * Slider verses are not concerned with their times
                 * respective to the song's total time. They only know
                 * their times relative to the stanza.
                 */
                const
                    { verseStartTime } = verseObject,

                    relativeStartTime = verseStartTime - stanzaStartTime,

                    /**
                     * If it's the last verse, its relative end time is
                     * the stanza's relative total time. Otherwise,
                     * it's the next verse's start time.
                     */
                    relativeEndTime =
                        index === stanzaVerseObjects.length - 1 ?
                            stanzaDuration :
                            stanzaVerseObjects[index + 1].verseStartTime - stanzaStartTime

                return (
                    <SliderVerse
                        key={index}
                        {...{
                            verseIndex: stanzaFirstVerseIndex + index,
                            relativeStartTime,
                            relativeEndTime,
                            stanzaDuration,

                            // TODO: Still needed for cursor?
                            startTime: verseStartTime,
                            stanzaEndTime
                        }}
                    />
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = propTypes

export default SliderVerses
