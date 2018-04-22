import React from 'react'
import PropTypes from 'prop-types'

import VerseAudioButton from './VerseAudioButton'
import VerseAudioIndicator from './VerseAudioIndicator'

const verseAudioPropTypes = {
    verseIndex: PropTypes.number.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    handleLyricPlay: PropTypes.func.isRequired,
    handleLyricVerseSelect: PropTypes.func.isRequired
}

const VerseAudio = ({

    verseIndex,
    isInteractivated,
    isSelected,
    isAfterSelected,
    handleLyricPlay,
    handleLyricVerseSelect

}) => [(
    <VerseAudioButton
        key="button"
        isInteractivated={isInteractivated}
        verseIndex={verseIndex}
        isSelected={isSelected}
        isAfterSelected={isAfterSelected}
        handleLyricPlay={handleLyricPlay}
        handleLyricVerseSelect={handleLyricVerseSelect}
    />
), (
    <VerseAudioIndicator
        key="indicator"
        isInteractivated={isInteractivated}
        isSelected={isSelected}
    />
)]

VerseAudio.propTypes = verseAudioPropTypes

export default VerseAudio


