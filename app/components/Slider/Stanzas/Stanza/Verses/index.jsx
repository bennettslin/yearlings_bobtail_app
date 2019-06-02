import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getStanzaConfig } from 'album/api/stanzas'

import VerseHoc from '../../../../Verse/Hoc'
import SliderVerse from './Verse'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

const propTypes = {
    // Through Redux.
    lyricSongIndex: PropTypes.number.isRequired,

    // From parents.
    stanzaIndex: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired
}

const SliderVerses = ({
    lyricSongIndex,
    stanzaIndex,
    stanzaDuration
}) => {

    const
        { stanzaVerseConfigs } = getStanzaConfig(
            lyricSongIndex,
            stanzaIndex
        ),
        stanzaFirstVerseIndex = stanzaVerseConfigs[0].verseIndex,
        stanzaStartTime = stanzaVerseConfigs[0].verseStartTime

    return (
        <div className={cx(
            'SliderVerses'
        )}>
            {stanzaVerseConfigs.map((verseConfig, index) => {
                /**
                 * Slider verses are not concerned with their times
                 * respective to the song's total time. They only know
                 * their times relative to the stanza.
                 */
                const
                    {
                        verseStartTime,
                        verseDuration
                    } = verseConfig,

                    relativeStartTime = verseStartTime - stanzaStartTime,

                    isLastVerseOfStanza =
                        index === stanzaVerseConfigs.length - 1

                return (
                    <VerseHoc
                        key={index}
                        inSlider
                        {...{
                            verseIndex: stanzaFirstVerseIndex + index,
                            isLastVerseOfStanza,
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

export default connect(mapStateToProps)(memo(SliderVerses))
