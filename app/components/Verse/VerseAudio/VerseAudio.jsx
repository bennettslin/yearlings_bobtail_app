import React, { Fragment } from 'react'
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

}) => (
    <Fragment>
        <VerseAudioButton
            {...{
                verseIndex,
                isInteractivated,
                isSelected,
                isAfterSelected,
                handleLyricPlay,
                handleLyricVerseSelect
            }}
        />
        <VerseAudioIndicator
            {...{
                isInteractivated,
                isSelected
            }}
        />
    </Fragment>
)

VerseAudio.propTypes = verseAudioPropTypes

export default VerseAudio


