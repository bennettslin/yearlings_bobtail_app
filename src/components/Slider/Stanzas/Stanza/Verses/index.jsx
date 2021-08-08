import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getVerseIndicesForStanza } from '../../../../../endpoint/album/stanzas'
import {
    getStartTimeForStanza,
    getStartTimeForVerse,
    getDurationForVerse,
} from '../../../../../endpoint/album/time'
import SliderVerse from './Verse'
import { mapLyricSongIndex } from '../../../../../redux/lyric/selector'
import './style'

const SliderVerses = ({
    stanzaIndex,
    stanzaDuration,

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        stanzaVerseIndices = getVerseIndicesForStanza(
            lyricSongIndex,
            stanzaIndex,
        ),
        stanzaStartTime = getStartTimeForStanza(lyricSongIndex, stanzaIndex)

    return (
        <div {...{ className: 'SliderVerses' }}>
            {stanzaVerseIndices.map((verseIndex, index) => {
                /**
                 * Slider verses are not concerned with their times
                 * respective to the song's total time. They only know
                 * their times relative to the stanza.
                 */
                const
                    verseStartTime = getStartTimeForVerse(
                        lyricSongIndex,
                        verseIndex,
                    ),
                    verseDuration = getDurationForVerse(
                        lyricSongIndex,
                        verseIndex,
                    ),

                    relativeStartTime = verseStartTime - stanzaStartTime,
                    isLastVerseOfStanza =
                        index === stanzaVerseIndices.length - 1

                return (
                    <SliderVerse
                        inSlider
                        {...{
                            key: index,
                            verseIndex,
                            isLastVerseOfStanza,
                            relativeStartTime,
                            verseDuration,
                            stanzaDuration,
                        }}
                    />
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = {
    stanzaIndex: PropTypes.number.isRequired,
    stanzaDuration: PropTypes.number.isRequired,
}

export default memo(SliderVerses)
