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
import { getSongsAndLoguesCount, getSongsNotLoguesCount } from '../../helpers/data-helper'
import { getComponentShouldUpdate, getValueInBitNumber } from '../../helpers/general-helper'

class AudioButtons extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPlaying',
                    'isTitleInAudio',
                    'selectedSongIndex',
                    'selectedAudioOptionIndex',
                    'canPlayThroughs'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                canPlayThroughs,

                isPlaying,
                isTitleInAudio,
                selectedAudioOptionIndex,

                handleAudioPlay,
                handleAudioOptionsToggle,
                handleAudioPreviousSong,
                handleAudioNextSong } = this.props,

            isPrologue = selectedSongIndex === 0,
            isFirstSong = selectedSongIndex === 1,
            songsCount = getSongsAndLoguesCount(),
            isLastSong = selectedSongIndex === songsCount - 2,
            isEpilogue = selectedSongIndex === songsCount - 1,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: (isPrologue || isEpilogue) ? 1 : selectedSongIndex
            })

        let playButtonText

        if (songCanPlayThrough) {
            playButtonText = isPlaying ? '\u23F8' : '\u25BA'

        } else {
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
}

AudioButtons.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,
    canPlayThroughs: PropTypes.number.isRequired,
    selectedAudioOptionIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired
}

export default connect(({
    isPlaying,
    isTitleInAudio,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
}) => ({
    isPlaying,
    isTitleInAudio,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
}))(AudioButtons)
