import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../SliderTouch'
import StopPropagationDispatcher from '../StopPropagation'
import { isEmailFocused } from '../../utils/email'

const RootTouchManager = forwardRef((props, ref) => {
    const
        dispatchSliderTouch = useRef(),
        stopPropagation = useRef(),
        closeForBodyClick = useRef(),
        [isSliderTouchEnding, setIsSliderTouchEnding] = useState(false)

    const dispatchTouchMove = e => {
        dispatchSliderTouch.current.move(e)
    }

    const dispatchTouchEnd = e => {
        // If this returns true, then slider touch is ending.
        if (dispatchSliderTouch.current.end()) {
            logEvent({ e, componentName: 'RootTouchManager' })
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(() => setIsSliderTouchEnding(false), 200)
            setIsSliderTouchEnding(true)
        }
    }

    const dispatchRootClick = e => {
        if (isEmailFocused()) {
            return false
        }

        logEvent({ e, componentName: 'RootTouchManager' })

        stopPropagation.current(e)

        if (!isSliderTouchEnding) {
            closeForBodyClick.current()
        }
    }

    useImperativeHandle(ref, () => ({
        move: dispatchTouchMove,
        end: dispatchTouchEnd,
        click: dispatchRootClick
    }))
    return (
        <>
            <CloseHandler {...{ ref: closeForBodyClick }} />
            <SliderTouchDispatcher {...{ ref: dispatchSliderTouch }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
})

export default RootTouchManager
