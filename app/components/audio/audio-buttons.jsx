// Component to show buttons for audio navigation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { AUDIO_PLAY_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY } from '../../constants/access'
import { AUDIO_OPTIONS } from '../../constants/options'
import { getSongsNotLoguesCount } from '../../helpers/data-helper'
import { getValueInBitNumber } from '../../helpers/general-helper'

const AudioButtons = ({

    selectedSongIndex,
    canPlayThroughs,

    isPlaying,
    isTitleInAudio,
    selectedAudioOptionIndex,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,

    handleAudioPlay,
    handleAudioOptionsToggle,
    handleAudioPreviousSong,
    handleAudioNextSong

}) => {

    const songCanPlayThrough = getValueInBitNumber({
            keysCount: getSongsNotLoguesCount(),
            bitNumber: canPlayThroughs,
            key: selectedSongIndex
        })

    let playButtonText = isPlaying ? '\u23F8' : '\u25BA'

    if (!songCanPlayThrough) {
        // TODO: Make this a real icon, of course.
        playButtonText = 'x'
    }

    return (
        <div className="audio-block audio-buttons-block">
            <div className="audio-subblock player-subblock">
                {/* Previous button. */}
                <Button
                    iconClass="audio-nav"
                    iconText={isPrologue || isFirstSong ? '\u2302' : '\u21E4'}
                    accessKey={AUDIO_PREVIOUS_SONG_KEY}
                    isEnabled={!isPrologue}
                    handleClick={handleAudioPreviousSong}
                />

                {/* Play button. */}
                <Button
                    iconClass="audio-play-toggle"
                    iconText={playButtonText}
                    accessKey={AUDIO_PLAY_KEY}
                    isLarge={!isTitleInAudio}
                    isEnabled={songCanPlayThrough}
                    handleClick={handleAudioPlay}
                />

                {/* Next button. */}
                <Button
                    iconClass="audio-nav"
                    iconText={isEpilogue || isLastSong ? '\u2302' : '\u21E5'}
                    accessKey={AUDIO_NEXT_SONG_KEY}
                    isEnabled={!isEpilogue}
                    handleClick={handleAudioNextSong}
                />
            </div>

            <div className="audio-subblock option-subblock">
                <Button
                    iconClass="audio-neutral"
                    iconText={AUDIO_OPTIONS[selectedAudioOptionIndex]}
                    accessKey={AUDIO_OPTIONS_TOGGLE_KEY}
                    handleClick={handleAudioOptionsToggle}
                />
            </div>
        </div>
    )
}

AudioButtons.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,
    selectedAudioOptionIndex: PropTypes.number.isRequired,
    canPlayThroughs: PropTypes.number.isRequired,

    // From parent.
    isPrologue: PropTypes.bool.isRequired,
    isFirstSong: PropTypes.bool.isRequired,
    isLastSong: PropTypes.bool.isRequired,
    isEpilogue: PropTypes.bool.isRequired,
    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired
}

export default connect(({
    selectedSongIndex,
    isPlaying,
    isTitleInAudio,
    selectedAudioOptionIndex,
    canPlayThroughs
}) => ({
    selectedSongIndex,
    isPlaying,
    isTitleInAudio,
    selectedAudioOptionIndex,
    canPlayThroughs
}))(AudioButtons)
