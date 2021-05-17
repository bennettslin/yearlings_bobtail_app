import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../SliderTouch'
import StopPropagationDispatcher from '../StopPropagation'

const RootTouchManager = forwardRef((props, ref) => {
    const
        dispatchSliderTouch = useRef(),
        stopPropagation = useRef(),
        closeForBodyClick = useRef(),
        [isSliderTouchEnding, setIsSliderTouchEnding] = useState(false)

    const dispatchTouchMove = e => {
        dispatchSliderTouch.current.move(e)
    }

    const dispatchTouchEnd = () => {
        // If this returns true, then slider touch is ending.
        if (dispatchSliderTouch.current.end()) {
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(() => setIsSliderTouchEnding(false), 200)
            setIsSliderTouchEnding(true)
        }
    }

    const dispatchRootClick = e => {
        stopPropagation.current(e)

        if (!isSliderTouchEnding) {
            closeForBodyClick.current()
        }
    }

    useImperativeHandle(ref, () => ({
        move: dispatchTouchMove,
        end: dispatchTouchEnd,
        click: dispatchRootClick,
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
