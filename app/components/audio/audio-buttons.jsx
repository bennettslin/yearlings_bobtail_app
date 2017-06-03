// Component to show buttons for audio navigation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { AUDIO_PLAY_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY } from '../../constants/access'
import { AUDIO_OPTIONS } from '../../constants/options'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class AudioButtons extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPlaying',
                    'isTitleInAudio',
                    'selectedAudioOptionIndex',
                    'isPrologue',
                    'isFirstSong',
                    'isLastSong',
                    'isEpilogue'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { isPlaying,
                isTitleInAudio,
                selectedAudioOptionIndex,
                isPrologue,
                isFirstSong,
                isLastSong,
                isEpilogue,

                handleAudioPlay,
                handleAudioOptionsToggle,
                handleAudioPreviousSong,
                handleAudioNextSong } = this.props

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
                        iconClass="audio-colour"
                        iconText={isPlaying ? '\u23F8' : '\u25BA'}
                        accessKey={AUDIO_PLAY_KEY}
                        isLarge={!isTitleInAudio}
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
}

AudioButtons.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,
    selectedAudioOptionIndex: PropTypes.number.isRequired,

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
    isPlaying,
    isTitleInAudio,
    selectedAudioOptionIndex
}) => ({
    isPlaying,
    isTitleInAudio,
    selectedAudioOptionIndex
}))(AudioButtons)
