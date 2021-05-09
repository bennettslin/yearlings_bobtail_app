import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import {
    mapIsMiniWidth,
    mapIsMonitorWidth,
    mapIsPhoneWidth,
} from '../../../redux/device/selector'
import { mapArtupSlideIndex } from '../../../redux/marketing/selector'
import Button from '../../Button'
import ArtupDispatcher from '../../../dispatchers/Artup'
import PitchNavButton from './Button'
import {
    getArtupSlideIndices,
    getArtupSlidesCount,
} from '../../../api/artup/slides'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../../constants/access'
import {
    PITCH_NEXT_BUTTON_KEY,
    PITCH_PREVIOUS_BUTTON_KEY,
} from '../../../constants/buttons'
import './style'

const ArtupNav = () => {
    const
        dispatchArtup = useRef(),
        isMonitorWidth = useSelector(mapIsMonitorWidth),
        isMiniWidth = useSelector(mapIsMiniWidth),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        artupSlideIndex = useSelector(mapArtupSlideIndex)

    const handlePreviousClick = () => {
        dispatchArtup.current({ direction: -1 })
    }
    const handleNextClick = () => {
        dispatchArtup.current({ direction: 1 })
    }
    const handleButtonClick = pitchIndex => {
        dispatchArtup.current({ artupSlideIndex: pitchIndex })
    }

    return (
        <>
            <Button
                {...{
                    isLargeSize: isMonitorWidth || isPhoneWidth,
                    isSmallSize: isMiniWidth,
                    buttonName: PITCH_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    isDisabled: artupSlideIndex === 1,
                    handleButtonClick: handlePreviousClick,
                }}
            />
            {!isPhoneWidth && getArtupSlideIndices().map(pitchIndex => (
                <PitchNavButton
                    {...{
                        key: pitchIndex,
                        pitchIndex,
                        handleButtonClick,
                    }}
                />
            ))}
            <Button
                {...{
                    isLargeSize: isMonitorWidth || isPhoneWidth,
                    isSmallSize: isMiniWidth,
                    buttonName: PITCH_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    isDisabled: artupSlideIndex === getArtupSlidesCount(),
                    handleButtonClick: handleNextClick,
                }}
            />
            <ArtupDispatcher {...{ ref: dispatchArtup }} />
        </>
    )
}

export default ArtupNav
