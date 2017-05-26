import React from 'react'
import PropTypes from 'prop-types'
import AudioButtons from './audio-buttons'
import TitleToggle from '../title/title-toggle'
import { SONG_FILES } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioSection = ({

    selectedSongIndex,

...other }) => {

    const isPrologue = selectedSongIndex === 0,
        isFirstSong = selectedSongIndex === 1,
        isLastSong = selectedSongIndex === SONG_FILES.length,
        isEpilogue = selectedSongIndex === SONG_FILES.length + 1

    return (
        <AudioSectionView {...other}
            isPrologue={isPrologue}
            isFirstSong={isFirstSong}
            isLastSong={isLastSong}
            isEpilogue={isEpilogue}
        />
    )
}

AudioSection.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    // From props.
    timerInAudio,
    titleInAudio,
    isPhone,
    selectedAdminIndex,
    isPlaying,
    selectedAudioOptionIndex,
    selectedTitleIndex,

    handleTitleToggle,
    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,

    audioTimerChild,
    audioBannerChild,

    // From controller.
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue

}) => {

    const audioButtonsProps = {
            titleInAudio,
            isPlaying,
            selectedAudioOptionIndex,
            isPrologue,
            isFirstSong,
            isLastSong,
            isEpilogue,
            handleAudioPlay,

            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle
        },
        titleProps = {
            selectedTitleIndex,
            titleInAudio,
            handleTitleToggle
        }

    return (
        <div
            className="section audio-section"
        >
            {selectedAdminIndex &&
                <h2>audio</h2>
            }
            {timerInAudio && (
                <div className="audio-timer-block">
                    {audioTimerChild}
                </div>
            )}
            {titleInAudio &&
                <TitleToggle {...titleProps} />
            }
            {(!isPhone || timerInAudio) && audioBannerChild}
            <AudioButtons {...audioButtonsProps} />
        </div>
    )
}

AudioSectionView.propTypes = {
    selectedAdminIndex: PropTypes.number,
    selectedAudioOptionIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    isPrologue: PropTypes.bool.isRequired,
    isFirstSong: PropTypes.bool.isRequired,
    isLastSong: PropTypes.bool.isRequired,
    isEpilogue: PropTypes.bool.isRequired,
    timerInAudio: PropTypes.bool,
    titleInAudio: PropTypes.bool.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,

    handleTitleToggle: PropTypes.func.isRequired,
    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,

    audioTimerChild: PropTypes.element.isRequired,
    audioBannerChild: PropTypes.element.isRequired
}

export default AudioSection
