import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseHoc from '../../../../Verse/Hoc'
import SliderVerse from './Verse'

const propTypes = {
    stanzaVerseConfigs: PropTypes.array.isRequired,
    stanzaDuration: PropTypes.number.isRequired
}

const SliderVerses = ({
    stanzaVerseConfigs,
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
                    {
                        verseStartTime,
                        verseDuration
                    } = verseObject,

                    relativeStartTime = verseStartTime - stanzaStartTime

                return (
                    <VerseHoc
                        key={index}
                        inSlider
                        {...{
                            verseIndex: stanzaFirstVerseIndex + index,
                            relativeStartTime,
                            verseDuration,
                            stanzaDuration,
                            VerseComponent: SliderVerse
                        }}
                    />
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = propTypes

export default SliderVerses
