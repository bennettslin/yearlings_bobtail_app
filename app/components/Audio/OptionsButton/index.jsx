import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { toggleIsAudioOptionsExpanded } from '../../../redux/toggle/action'
import { mapIsAudioOptionsExpanded } from '../../../redux/toggle/selector'
import { AUDIO_OPTIONS_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const OptionsButton = () => {
    const
        dispatch = useDispatch(),
        isAudioOptionsExpanded = useSelector(mapIsAudioOptionsExpanded)

    const handleOptionsClick = () => {
        dispatch(toggleIsAudioOptionsExpanded())
    }

    return (
        <Button
            isCustomSize
            {...{
                className: isAudioOptionsExpanded ? 'expanded' : 'collapsed',
                buttonName: AUDIO_OPTIONS_BUTTON_KEY,
                accessKey: '?',
                handleButtonClick: handleOptionsClick,
            }}
        />
    )
}

export default OptionsButton
