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
    title,
    selectedAudioOptionIndex,

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
            titleInAudio,
            title,
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

export default AudioSection
