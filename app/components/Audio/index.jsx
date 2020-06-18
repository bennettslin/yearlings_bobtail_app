// Component to show buttons for audio navigation.
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlayDispatcher from '../../dispatchers/Play'
import SongDispatcher from '../../handlers/Song/Song'
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
import { toggleAudioOptionIndex } from '../../redux/session/action'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapIsDesktopWidth } from '../../redux/device/selector'
import { mapPlayerCanPlayThrough } from '../../redux/players/selector'
import {
    mapIsSelectedPrologue,
    mapIsSelectedEpilogue
} from '../../redux/selected/selector'
import { mapAudioOptionIndex } from '../../redux/session/selector'
import { mapIsTwoRowMenu } from '../../redux/viewport/selector'
import './style'

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

const Audio = () => {
    const
        dispatch = useDispatch(),
        dispatchPlay = useRef(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        isTwoRowMenu = useSelector(mapIsTwoRowMenu),
        playerCanPlayThrough = useSelector(mapPlayerCanPlayThrough),
        isPrologue = useSelector(mapIsSelectedPrologue),
        isEpilogue = useSelector(mapIsSelectedEpilogue),
        audioOptionIndex = useSelector(mapAudioOptionIndex),
        isDesktopWidth = useSelector(mapIsDesktopWidth)

    const _handleAudioOptionClick = () => {
        dispatch(toggleAudioOptionIndex())
    }

    const _handlePlayClick = () => {
        dispatchPlay.current()
    }

    const _handlePreviousClick = () => {
        dispatchSong.current({ direction: -1 })
    }

    const _handleNextClick = () => {
        dispatchSong.current({ direction: 1 })
    }

    const getDynamicButtonConfigs = () => {
        const dynamicButtonConfigs = [
            {
                isDisabled: isPrologue,
                handleButtonClick: _handlePreviousClick
            },
            {
                isPulsateAnimated: isPrologue,
                buttonIdentifier: isPlaying,
                isDisabled: !playerCanPlayThrough,
                handleButtonClick: _handlePlayClick
            },
            {
                isDisabled: isEpilogue,
                handleButtonClick: _handleNextClick
            },
            {
                buttonIdentifier: audioOptionIndex,
                handleButtonClick: _handleAudioOptionClick
            }
        ]

        // If desktop width, reverse order to keep tooltips on top.
        return (
            isDesktopWidth ?
                dynamicButtonConfigs.reverse() :
                dynamicButtonConfigs
        )
    }

    return (
        <div {...{ className: 'Audio' }} >
            {/* Placeholder to create space. */}
            {isTwoRowMenu && (
                <div {...{ className: 'Audio__flexPlaceholder' }} />
            )}
            {getDynamicButtonConfigs().map((dynamicConfig, index) => {
                // If desktop width, reverse order to keep tooltips on top.
                const staticConfig = STATIC_BUTTON_CONFIGS[
                    isDesktopWidth ?
                        STATIC_BUTTON_CONFIGS.length - index - 1 :
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
                <div {...{ className: 'Audio__flexPlaceholder' }} />
            )}
            <PlayDispatcher {...{ ref: dispatchPlay }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </div>
    )
}

export default Audio
