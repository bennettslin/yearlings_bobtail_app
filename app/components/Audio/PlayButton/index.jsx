import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import PlayDispatcher from '../../../dispatchers/Play'
import Button from '../../Button'
import {
    mapIsPlaying,
    mapIsPlayButtonEnabled,
} from '../../../redux/audio/selector'
import { mapIsSelectedPrologue } from '../../../redux/selected/selector'
import { AUDIO_PLAY_KEY } from '../../../constants/access'
import { AUDIO_PLAY_BUTTON_KEY } from '../../../constants/buttons'

const PlayButton = () => {
    const
        dispatchPlay = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        isPlayButtonEnabled = useSelector(mapIsPlayButtonEnabled),
        isPrologue = useSelector(mapIsSelectedPrologue)

    const handlePlayClick = () => {
        dispatchPlay.current()
    }

    return (
        <>
            <Button
                isLargeSize
                {...{
                    buttonName: AUDIO_PLAY_BUTTON_KEY,
                    accessKey: AUDIO_PLAY_KEY,
                    isPulsateAnimated: isPrologue,
                    buttonOption: isPlaying,
                    isDisabled: !isPlayButtonEnabled,
                    handleButtonClick: handlePlayClick,
                }}
            />
            <PlayDispatcher {...{ ref: dispatchPlay }} />
        </>
    )
}

export default PlayButton
