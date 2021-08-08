import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import SongDispatcher from '../../../dispatchers/Song'
import Button from '../../Button'
import { mapIsSelectedPrologue } from '../../../redux/selected/selector'
import { PREVIOUS_SONG_KEY } from '../../../constants/access'
import { AUDIO_PREVIOUS_BUTTON_KEY } from '../../../constants/buttons'

const PreviousButton = () => {
    const
        dispatchSong = useRef(),
        isPrologue = useSelector(mapIsSelectedPrologue)

    const handlePreviousClick = () => {
        dispatchSong.current({ direction: -1 })
    }

    return (
        <>
            <Button
                {...{
                    buttonName: AUDIO_PREVIOUS_BUTTON_KEY,
                    accessKey: PREVIOUS_SONG_KEY,
                    isDisabled: isPrologue,
                    handleButtonClick: handlePreviousClick,
                }}
            />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </>
    )
}

export default PreviousButton
