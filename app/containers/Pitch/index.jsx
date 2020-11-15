import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Pitch from '../../components/Pitch'
import { getKeyName } from '../../managers/Key/helper'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import { getWindow } from '../../utils/browser'
import { PITCH_TOGGLE_KEY } from '../../constants/access'

const PitchContainer = () => {
    const
        pitchContainerElement = useRef(),
        navigatePitch = useRef()

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
                className: 'PitchContainer',
                tabIndex: -1,
                onKeyUp
            }}
        >
            <Pitch />
            <PitchNavigation {...{ ref: navigatePitch }} />
        </div>
    )
}

export default PitchContainer
