// Component to show buttons for audio navigation.
import React, { useRef, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlayDispatcher from '../../dispatchers/Play'
import SongDispatcher from '../../dispatchers/Song'
import Button from '../Button'
import {
    AUDIO_PLAY_KEY,
    SONG_REPEAT_TOGGLE_KEY,
    PREVIOUS_SONG_KEY,
    NEXT_SONG_KEY,
} from '../../constants/access'
import {
    AUDIO_NEXT_BUTTON_KEY,
    SONG_REPEAT_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
} from '../../constants/buttons'
import { toggleIsSongRepeatOn } from '../../redux/session/action'
import {
    mapIsPlaying,
    mapIsPlayButtonEnabled,
} from '../../redux/audio/selector'
import {
    mapIsSelectedPrologue,
    mapIsSelectedEpilogue,
} from '../../redux/selected/selector'
import { mapIsSongRepeatOn } from '../../redux/session/selector'
import { mapIsTwoRowMenu } from '../../redux/viewport/selector'
import './style'

const BUTTON_CLASS_NAME = 'AudioButton'

// This is the order in mobile width.
const STATIC_BUTTON_CONFIGS = [
    {
        key: AUDIO_PREVIOUS_BUTTON_KEY,
        buttonName: AUDIO_PREVIOUS_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: PREVIOUS_SONG_KEY,
    },
    {
        key: AUDIO_PLAY_BUTTON_KEY,
        isLargeSize: true,
        buttonName: AUDIO_PLAY_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: AUDIO_PLAY_KEY,
    },
    {
        key: AUDIO_NEXT_BUTTON_KEY,
        buttonName: AUDIO_NEXT_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: NEXT_SONG_KEY,
    },
    {
        key: SONG_REPEAT_BUTTON_KEY,
        buttonName: SONG_REPEAT_BUTTON_KEY,
        className: BUTTON_CLASS_NAME,
        accessKey: SONG_REPEAT_TOGGLE_KEY,
    },
]

const Audio = () => {
    const
        dispatch = useDispatch(),
        dispatchPlay = useRef(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        isTwoRowMenu = useSelector(mapIsTwoRowMenu),
        isPlayButtonEnabled = useSelector(mapIsPlayButtonEnabled),
        isPrologue = useSelector(mapIsSelectedPrologue),
        isEpilogue = useSelector(mapIsSelectedEpilogue),
        isSongRepeatOn = useSelector(mapIsSongRepeatOn)

    const handleSongRepeatClick = () => {
        dispatch(toggleIsSongRepeatOn())
    }

    const handlePlayClick = () => {
        dispatchPlay.current()
    }

    const handlePreviousClick = () => {
        dispatchSong.current({ direction: -1 })
    }

    const handleNextClick = () => {
        dispatchSong.current({ direction: 1 })
    }

    const getDynamicButtonConfigs = () => {
        const dynamicButtonConfigs = [
            {
                isDisabled: isPrologue,
                handleButtonClick: handlePreviousClick,
            },
            {
                isPulsateAnimated: isPrologue,
                buttonIdentifier: isPlaying,
                isDisabled: !isPlayButtonEnabled,
                handleButtonClick: handlePlayClick,
            },
            {
                isDisabled: isEpilogue,
                handleButtonClick: handleNextClick,
            },
            {
                buttonIdentifier: isSongRepeatOn,
                handleButtonClick: handleSongRepeatClick,
            },
        ]

        // If desktop width, reverse order to keep tooltips on top.
        return (
            dynamicButtonConfigs.reverse()
        )
    }

    useEffect(() => {
        logState('isSongRepeatOn', isSongRepeatOn)
    }, [isSongRepeatOn])

    return (
        <div {...{ className: 'Audio' }}>
            {/* Placeholder to create space. */}
            {isTwoRowMenu && (
                <div {...{ className: 'Audio__flexPlaceholder' }} />
            )}
            {getDynamicButtonConfigs().map((dynamicConfig, index) => {
                // If desktop width, reverse order to keep tooltips on top.
                const staticConfig = STATIC_BUTTON_CONFIGS[
                    STATIC_BUTTON_CONFIGS.length - index - 1
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

export default memo(Audio)
