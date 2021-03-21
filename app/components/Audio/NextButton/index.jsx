import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import SongDispatcher from '../../../dispatchers/Song'
import Button from '../../Button'
import { mapIsSelectedEpilogue } from '../../../redux/selected/selector'
import { NEXT_SONG_KEY } from '../../../constants/access'
import { AUDIO_NEXT_BUTTON_KEY } from '../../../constants/buttons'

const NextButton = () => {
    const
        dispatchSong = useRef(),
        isEpilogue = useSelector(mapIsSelectedEpilogue)

    const handleNextClick = () => {
        dispatchSong.current({ direction: 1 })
    }

    return (
        <>
            <Button
                {...{
                    buttonName: AUDIO_NEXT_BUTTON_KEY,
                    accessKey: NEXT_SONG_KEY,
                    isDisabled: isEpilogue,
                    handleButtonClick: handleNextClick,
                }}
            />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </>
    )
}

export default NextButton
