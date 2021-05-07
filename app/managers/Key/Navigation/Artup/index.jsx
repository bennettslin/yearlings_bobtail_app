import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../../../constants/access'

const ArtupNavigation = forwardRef((props, ref) => {
    const dispatchArtup = useRef()

    const navigateArtup = keyName => {
        let keyWasRegistered = false
        switch (keyName) {
            case ARROW_LEFT:
                keyWasRegistered = dispatchArtup.current({ direction: -1 })
                break
            case ARROW_RIGHT:
                keyWasRegistered = dispatchArtup.current({ direction: 1 })
                break
        }

        return keyWasRegistered
    }

    useImperativeHandle(ref, () => navigateArtup)
    return (
        <ArtupDispatcher {...{ ref: dispatchArtup }} />
    )
})

export default ArtupNavigation
