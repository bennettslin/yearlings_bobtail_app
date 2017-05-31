import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioButtons from './audio-buttons'
import { SONG_FILES } from '../../constants/files'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedSongIndex,
    selectedAudioOptionIndex
}) => ({
// Pass Redux state into component props.
    selectedSongIndex,
    selectedAudioOptionIndex
})

/*************
 * CONTAINER *
 *************/

class AudioSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'selectedAudioOptionIndex',
                    'isPhone',
                    'isPlaying',
                    'titleInAudio',

                    // Update when banner props are updated.
                    'audioBannerProps'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                ...other } = this.props,

            // TODO: Get these from data helper.
            isPrologue = selectedSongIndex === 0,
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
}

AudioSection.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired,
    selectedAudioOptionIndex: PropTypes.number.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    titleInAudio: PropTypes.bool.isRequired,
    audioBannerProps: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    // From props.
    timerInAudio,
    titleInAudio,
    isPhone,
    isPlaying,
    selectedAudioOptionIndex,

    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,

    audioTimerChild,
    audioBannerChild,
    titleToggleChild,

    // From controller.
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue

}) => {

    const audioButtonsProps = {
            selectedAudioOptionIndex,
            titleInAudio,
            isPlaying,
            isPrologue,
            isFirstSong,
            isLastSong,
            isEpilogue,

            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle
        }

    return (
        <div
            className="section audio-section"
        >
            {timerInAudio && (
                <div className="audio-timer-block">
                    {audioTimerChild}
                </div>
            )}
            {titleInAudio &&
                titleToggleChild
            }
            {(!isPhone || timerInAudio) && audioBannerChild}
            <AudioButtons {...audioButtonsProps} />
        </div>
    )
}

AudioSectionView.propTypes = {
    selectedAudioOptionIndex: PropTypes.number.isRequired,

    isPrologue: PropTypes.bool.isRequired,
    isFirstSong: PropTypes.bool.isRequired,
    isLastSong: PropTypes.bool.isRequired,
    isEpilogue: PropTypes.bool.isRequired,
    timerInAudio: PropTypes.bool,
    titleInAudio: PropTypes.bool.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,

    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,

    audioTimerChild: PropTypes.element.isRequired,
    audioBannerChild: PropTypes.element.isRequired
}

export default connect(passReduxStateToProps)(AudioSection)
