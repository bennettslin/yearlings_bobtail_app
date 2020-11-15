import React, { useEffect, useRef } from 'react'
import Pitch from '../../components/Pitch'
import { getKeyName } from '../../managers/Key/helper'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'

const PitchContainer = () => {
    const
        pitchContainerElement = useRef(),
        navigatePitch = useRef()

    const onKeyUp = e => {
        const keyName = getKeyName(e)
        navigatePitch.current(keyName)
    }

    // TODO: Make focusing more robust.
    useEffect(() => {
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
            <Pitch
                {...{
                    onKeyUp
                }}
            />
            <PitchNavigation {...{ ref: navigatePitch }} />
        </div>
    )
}

export default PitchContainer
