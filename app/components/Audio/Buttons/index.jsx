// Component to show buttons for audio navigation.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import PlayDispatcher from '../../../dispatchers/PlayDispatcher'
import SongDispatcher from '../../../handlers/SongHandler/Dispatcher'
import Button from '../../Button'

import {
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    AUDIO_PREVIOUS_SONG_KEY,
    AUDIO_NEXT_SONG_KEY
} from 'constants/access'

import {
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY
} from 'constants/buttons'

import { getSongsAndLoguesCount } from 'helpers/data'
import { populateDispatch } from 'helpers/dispatch'
import { getPlayerCanPlayThrough } from 'helpers/player'

const mapStateToProps = ({
    playersStore: { playersBitNumber },
    audioStore: { isPlaying },
    sessionStore: { selectedAudioOptionIndex },
    songStore: { selectedSongIndex }
}) => ({
    isPlaying,
    playersBitNumber,
    selectedAudioOptionIndex,
    selectedSongIndex
})

class AudioButtons extends PureComponent {

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

    _setDispatch = (payload) => {
        populateDispatch(this, payload)
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
            <div className={cx(
                'AudioButtons',
                'Audio__child',
                'flexAlignContainer'
            )}>
                <div className={cx(
                    'AudioButtons__childPlayer',
                    'AudioButtons__child',
                    'flexAlignContainer'
                )}>
                    {/* Previous button. */}
                    <Button
                        {...{
                            buttonName: AUDIO_NEXT_BUTTON_KEY,
                            className: 'AudioButton',
                            buttonIdentifier: isPrologue,
                            accessKey: AUDIO_PREVIOUS_SONG_KEY,
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
                            accessKey: AUDIO_NEXT_SONG_KEY,
                            isDisabled: isEpilogue,
                            handleButtonClick: this._handleNextClick
                        }}
                    />
                </div>

                <div className={cx(
                    'AudioButtons__childOption',
                    'AudioButtons__child',
                    'flexAlignContainer'
                )}>
                    <Button
                        {...{
                            buttonName: AUDIO_OPTIONS_BUTTON_KEY,
                            className: 'AudioButton',
                            buttonIdentifier: selectedAudioOptionIndex,
                            accessKey: AUDIO_OPTIONS_TOGGLE_KEY,
                            handleButtonClick: this._handleAudioOptionClick
                        }}
                    />
                </div>
                <AudioOptionDispatcher {...{ setDispatch: this._setDispatch }} />
                <PlayDispatcher {...{ setDispatch: this._setDispatch }} />
                <SongDispatcher {...{ setDispatch: this._setDispatch }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioButtons)
