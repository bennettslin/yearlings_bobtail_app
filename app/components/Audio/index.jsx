// Component to show buttons for audio navigation.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AudioOptionDispatcher from '../../dispatchers/AudioOptionDispatcher'
import PlayDispatcher from '../../dispatchers/PlayDispatcher'
import SongDispatcher from '../../handlers/Song/Dispatcher'
import Button from '../Button'

import {
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    PREVIOUS_SONG_KEY,
    NEXT_SONG_KEY
} from 'constants/access'

import {
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY
} from 'constants/buttons'

import { getSongsAndLoguesCount } from 'album/api/songs'
import { populateRefs } from 'helpers/ref'
import { getPlayerCanPlayThrough } from 'helpers/player'

const mapStateToProps = ({
    playersStore: { playersBitNumber },
    audioStore: { isPlaying },
    sessionStore: { selectedAudioOptionIndex },
    selectedStore: { selectedSongIndex }
}) => ({
    isPlaying,
    playersBitNumber,
    selectedAudioOptionIndex,
    selectedSongIndex
})

class Audio extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired
    }

    _handleAudioOptionClick = () => {
        this.dispatchAudioOption()
    }

    _handlePlayClick = () => {
        this.dispatchPlay()
    }

    _handlePreviousClick = () => {
        this.dispatchSong({ direction: -1 })
    }

    _handleNextClick = () => {
        this.dispatchSong({ direction: 1 })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                selectedSongIndex,
                playersBitNumber,

                isPlaying,
                selectedAudioOptionIndex
            } = this.props,

            isPrologue = selectedSongIndex === 0,
            songsCount = getSongsAndLoguesCount(),
            isEpilogue = selectedSongIndex === songsCount - 1,

            playerCanPlayThrough = getPlayerCanPlayThrough({
                songIndex: selectedSongIndex,
                playersBitNumber
            })

        return (
            <___>
                {/* Previous button. */}
                <Button
                    {...{
                        buttonName: AUDIO_NEXT_BUTTON_KEY,
                        className: 'AudioButton',
                        buttonIdentifier: isPrologue,
                        accessKey: PREVIOUS_SONG_KEY,
                        isDisabled: isPrologue,
                        handleButtonClick: this._handlePreviousClick
                    }}
                />

                {/* Play button. */}
                <Button
                    isLargeSize
                    {...{
                        buttonName: AUDIO_PLAY_BUTTON_KEY,
                        className: 'AudioButton',
                        buttonIdentifier: isPlaying,
                        accessKey: AUDIO_PLAY_KEY,
                        isDisabled: !playerCanPlayThrough,
                        handleButtonClick: this._handlePlayClick
                    }}
                />

                {/* Next button. */}
                <Button
                    {...{
                        buttonName: AUDIO_PREVIOUS_BUTTON_KEY,
                        className: 'AudioButton',
                        buttonIdentifier: isEpilogue,
                        accessKey: NEXT_SONG_KEY,
                        isDisabled: isEpilogue,
                        handleButtonClick: this._handleNextClick
                    }}
                />

                <Button
                    {...{
                        buttonName: AUDIO_OPTIONS_BUTTON_KEY,
                        className: 'AudioButton',
                        buttonIdentifier: selectedAudioOptionIndex,
                        accessKey: AUDIO_OPTIONS_TOGGLE_KEY,
                        handleButtonClick: this._handleAudioOptionClick
                    }}
                />
                <AudioOptionDispatcher {...{ getRefs: this._getRefs }} />
                <PlayDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

export default connect(mapStateToProps)(Audio)
