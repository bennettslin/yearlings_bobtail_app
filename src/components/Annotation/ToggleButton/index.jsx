import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { toggleIsSongRepeatOn } from '../../../redux/session/action'
import { mapIsSongRepeatOn } from '../../../redux/session/selector'
import { ANNOTATION_TOGGLE_KEY } from '../../../constants/access'
import { ANNOTATION_TOGGLE_BUTTON_KEY } from '../../../constants/buttons'

const AnnotationToggleButton = () => {
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
            isSmallSize
            {...{
                buttonName: ANNOTATION_TOGGLE_BUTTON_KEY,
                accessKey: ANNOTATION_TOGGLE_KEY,
                buttonOption: isSongRepeatOn,
                handleButtonClick: handleSongRepeatClick,
            }}
        />
    )
}

export default AnnotationToggleButton
