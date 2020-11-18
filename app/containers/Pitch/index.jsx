import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import { navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import Pitch from '../../components/Pitch'
import { getKeyName } from '../../managers/Key/helper'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import { getWindow } from '../../utils/browser'
import {
    resetPitchSegmentIndex,
    decrementPitchSegmentIndex,
    incrementPitchSegmentIndex
} from '../../redux/pitch/action'
import { PITCH_TOGGLE_KEY } from '../../constants/access'
import {
    POPUP_HOME_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY
} from '../../constants/buttons'

const PitchContainer = () => {
    const
        dispatch = useDispatch(),
        pitchContainerElement = useRef(),
        navigatePitch = useRef()

    const handleHomeClick = () => {
        dispatch(resetPitchSegmentIndex())
    }
    const handlePreviousClick = () => {
        dispatch(decrementPitchSegmentIndex())
    }
    const handleNextClick = () => {
        dispatch(incrementPitchSegmentIndex())
    }

    const onKeyUp = e => {
        const keyName = getKeyName(e)

        // Handle pitch navigation.
        navigatePitch.current(keyName)

        // Handle return home to album.
        if (keyName === PITCH_TOGGLE_KEY) {
            /**
             * Navigation cannot be done through gatsby, since it does not
             * change store provider. Push, not replace, in history.
             */
            getWindow().location.href = '/'
        }
    }

    useEffect(() => {
        // Remove the trailing backslash.
        navigate(
            '/Pitch',
            { replace: true }
        )

        // TODO: Make focusing more robust.
        pitchContainerElement.current.focus()
    }, [])

    return (
        <div
            {...{
                ref: pitchContainerElement,
                className: cx(
                    'PitchContainer',
                    'abF',
                    'foN'
                ),
                tabIndex: -1,
                onKeyUp
            }}
        >
            <Pitch />
            <Button
                isLargeSize
                {...{
                    // className: 'Button__popup',
                    buttonName: POPUP_HOME_BUTTON_KEY,
                    handleButtonClick: handleHomeClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    // className: 'Button__popup',
                    buttonName: POPUP_PREVIOUS_BUTTON_KEY,
                    handleButtonClick: handlePreviousClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    // className: 'Button__popup',
                    buttonName: POPUP_NEXT_BUTTON_KEY,
                    handleButtonClick: handleNextClick
                }}
            />
            <PitchNavigation {...{ ref: navigatePitch }} />
        </div>
    )
}

export default PitchContainer
