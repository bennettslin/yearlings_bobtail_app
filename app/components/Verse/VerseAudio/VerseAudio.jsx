import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import VerseAudioButton from './VerseAudioButton'
// import VerseAudioIndicator from './VerseAudioIndicator'

const verseAudioPropTypes = {
    verseIndex: PropTypes.number.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    isOnCursor: PropTypes.bool.isRequired,
    isAfterCursor: PropTypes.bool.isRequired,
    handleLyricPlay: PropTypes.func.isRequired,
    handleLyricVerseSelect: PropTypes.func.isRequired
}

const VerseAudio = ({

    verseIndex,
    isInteractivated,
    isOnCursor,
    isAfterCursor,
    handleLyricPlay,
    handleLyricVerseSelect

}) => (
    <Fragment>
        <VerseAudioButton
            {...{
                verseIndex,
                isInteractivated,
                isOnCursor,
                isAfterCursor,
                handleLyricPlay,
                handleLyricVerseSelect
            }}
        />
        {/* <VerseAudioIndicator
            {...{
                isInteractivated,
                isOnCursor
            }}
        /> */}
    </Fragment>
)

VerseAudio.propTypes = verseAudioPropTypes

export default VerseAudio


