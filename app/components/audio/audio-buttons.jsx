import React from 'react'
import Button from '../button/button'
import { AUDIO_OPTIONS } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioButtons = (props) =>  (
    <AudioButtonsView {...props} />
)

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
                isEnabled={!isPrologue}
                handleClick={handleAudioPreviousSong}
            />

            {/* Play button. */}
            <Button
                iconClass="audio-colour"
                iconText={isPlaying ? '\u23F8' : '\u25BA'}
                isLarge={!titleInAudio}
                handleClick={handleAudioPlay}
            />

            {/* Next button. */}
            <Button
                iconClass="audio-nav"
                iconText={isEpilogue || isLastSong ? '\u2302' : '\u21E5'}
                isEnabled={!isEpilogue}
                handleClick={handleAudioNextSong}
            />
        </div>

        <div className="audio-subblock option-subblock">
            <Button
                iconClass="audio-neutral"
                iconText={AUDIO_OPTIONS[selectedAudioOptionIndex]}
                handleClick={handleAudioOptionsToggle}
            />
        </div>
    </div>
)

export default AudioButtons
