import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderVerse from './SliderVerse'

const propTypes = {
    stanzaVerseConfigs: PropTypes.array.isRequired,
    stanzaEndTime: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired
}

const SliderVerses = ({

    stanzaVerseConfigs,

    stanzaEndTime,
    stanzaDuration

}) => {

    const stanzaFirstVerseIndex = stanzaVerseConfigs[0].verseIndex,
        stanzaStartTime = stanzaVerseConfigs[0].verseStartTime

    return (
        <div className={cx(
            'SliderVerses'
        )}>
            {stanzaVerseConfigs.map((verseObject, index) => {

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
                        index === stanzaVerseConfigs.length - 1 ?
                            stanzaDuration :
                            stanzaVerseConfigs[index + 1].verseStartTime - stanzaStartTime

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
