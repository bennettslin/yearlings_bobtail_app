import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { toggleIsSongRepeatOn } from '../../../redux/session/action'
import { mapIsSongRepeatOn } from '../../../redux/session/selector'
import { SONG_REPEAT_TOGGLE_KEY } from '../../../constants/access'
import { SONG_REPEAT_BUTTON_KEY } from '../../../constants/buttons'

const RepeatButton = () => {
    const
        dispatch = useDispatch(),
        isSongRepeatOn = useSelector(mapIsSongRepeatOn)

    const handleSongRepeatClick = () => {
        dispatch(toggleIsSongRepeatOn())
    }

    useEffect(() => {
        logState('isSongRepeatOn', isSongRepeatOn)
    }, [isSongRepeatOn])

    return (
        <Button
            {...{
                buttonName: SONG_REPEAT_BUTTON_KEY,
                accessKey: SONG_REPEAT_TOGGLE_KEY,
                buttonIdentifier: isSongRepeatOn,
                handleButtonClick: handleSongRepeatClick,
            }}
        />
    )
}

export default RepeatButton
