// Component to show buttons for audio navigation.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import AudioOptionDispatcher from '../../dispatchers/AudioOption'
import PlayDispatcher from '../../dispatchers/PlayDispatcher'
import SongDispatcher from '../../handlers/Song/Dispatcher'
import Button from '../Button'
import {
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    PREVIOUS_SONG_KEY,
    NEXT_SONG_KEY
} from '../../constants/access'
import {
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY
} from '../../constants/buttons'
import { getSongsAndLoguesCount } from '../../album/api/songs'
import { populateRefs } from '../../helpers/ref'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { IS_PLAYING_SELECTOR } from '../../redux/audio/selectors'
import { IS_TWO_ROW_MENU_SELECTOR } from '../../redux/responsive/selectors'
import { PLAYERS_BIT_NUMBER_SELECTOR } from '../../redux/players/selectors'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../redux/selected/selectors'
import { AUDIO_OPTION_INDEX_SELECTOR } from '../../redux/session/selectors'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../redux/viewport/selectors'
import './style'

const mapStateToProps = state => {
    const
        isPlaying = IS_PLAYING_SELECTOR(state),
        isTwoRowMenu = IS_TWO_ROW_MENU_SELECTOR(state),
        playersBitNumber = PLAYERS_BIT_NUMBER_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        audioOptionIndex = AUDIO_OPTION_INDEX_SELECTOR(state),
        isDesktopWidth = IS_DESKTOP_WIDTH_SELECTOR(state)

    return {
        isPlaying,
        playersBitNumber,
        audioOptionIndex,
        selectedSongIndex,
        isTwoRowMenu,
        isDesktopWidth
    }
}

const BUTTON_CLASS_NAME = 'AudioButton'

// This is the order in mobile width.
const STATIC_BUTTON_CONFIGS = [
    {
        key: AUDIO_PREVIOUS_BUTTON_KEY,
        buttonName: AUDIO_PREVIOUS_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: PREVIOUS_SONG_KEY
    },
    {
        key: AUDIO_PLAY_BUTTON_KEY,
        isLargeSize: true,
        buttonName: AUDIO_PLAY_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: AUDIO_PLAY_KEY
    },
    {
        key: AUDIO_NEXT_BUTTON_KEY,
        buttonName: AUDIO_NEXT_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: NEXT_SONG_KEY
    },
    {
        key: AUDIO_OPTIONS_BUTTON_KEY,
        buttonName: AUDIO_OPTIONS_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: AUDIO_OPTIONS_TOGGLE_KEY
    }
]

class Audio extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        audioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
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

    getDynamicButtonConfigs = () => {
        const {
                selectedSongIndex,
                playersBitNumber,
                isPlaying,
                audioOptionIndex,
                isDesktopWidth
            } = this.props,

            isPrologue = selectedSongIndex === 0,
            songsCount = getSongsAndLoguesCount(),
            isEpilogue = selectedSongIndex === songsCount - 1,
            playerCanPlayThrough = getPlayerCanPlayThroughFromBit({
                songIndex: selectedSongIndex,
                playersBitNumber
            }),

            dynamicButtonConfigs = [
                {
                    isDisabled: isPrologue,
                    handleButtonClick: this._handlePreviousClick
                },
                {
                    isPulsateAnimated: isPrologue,
                    buttonIdentifier: isPlaying,
                    isDisabled: !playerCanPlayThrough,
                    handleButtonClick: this._handlePlayClick
                },
                {
                    isDisabled: isEpilogue,
                    handleButtonClick: this._handleNextClick
                },
                {
                    buttonIdentifier: audioOptionIndex,
                    handleButtonClick: this._handleAudioOptionClick
                }
            ]

        // If desktop width, reverse order to keep tooltips on top.
        return (
            isDesktopWidth ?
                dynamicButtonConfigs.reverse() :
                dynamicButtonConfigs
        )
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getDispatchAudioOption = dispatch => {
        this.dispatchAudioOption = dispatch
    }

    render() {
        const {
                isTwoRowMenu,
                isDesktopWidth
            } = this.props,
            dynamicButtonConfigs = this.getDynamicButtonConfigs()

        return (
            <div
                {...{
                    className: cx(
                        'Audio'
                    )
                }}
            >
                {/* Placeholder to create space. */}
                {isTwoRowMenu && (
                    <div
                        {...{
                            className: cx(
                                'Audio__flexPlaceholder'
                            )
                        }}
                    />
                )}
                {dynamicButtonConfigs.map((dynamicConfig, index) => {

                    // If desktop width, reverse order to keep tooltips on top.
                    const staticConfig = STATIC_BUTTON_CONFIGS[
                        isDesktopWidth ?
                            dynamicButtonConfigs.length - index - 1 :
                            index
                    ]

                    return (
                        <Button
                            {...dynamicConfig}
                            {...staticConfig}
                        />
                    )
                })}

                {/* Placeholder to create space. */}
                {isTwoRowMenu && (
                    <div
                        {...{
                            className: cx(
                                'Audio__flexPlaceholder'
                            )
                        }}
                    />
                )}

                <AudioOptionDispatcher
                    {...{ ref: this.getDispatchAudioOption }}
                />
                <PlayDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Audio)
