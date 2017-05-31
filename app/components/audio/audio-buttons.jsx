import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import { AUDIO_OPTIONS } from '../../helpers/constants'
import { AUDIO_PLAY_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY } from '../../constants/access'

/*************
 * CONTAINER *
 *************/

const AudioButtons = (props) =>  (
    <AudioButtonsView {...props} />
)

AudioButtons.propTypes = {
    selectedAudioOptionIndex: PropTypes.number.isRequired,
    titleInAudio: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPrologue: PropTypes.bool.isRequired,
    isFirstSong: PropTypes.bool.isRequired,
    isLastSong: PropTypes.bool.isRequired,
    isEpilogue: PropTypes.bool.isRequired,
    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioButtonsView = ({

    // From props.
    titleInAudio,
    isPlaying,
    selectedAudioOptionIndex,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    handleAudioPlay,
    handleAudioOptionsToggle,

    handleAudioPreviousSong,
    handleAudioNextSong

}) => (
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
                iconClass="audio-colour"
                iconText={isPlaying ? '\u23F8' : '\u25BA'}
                accessKey={AUDIO_PLAY_KEY}
                isLarge={!titleInAudio}
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

export default AudioButtons
