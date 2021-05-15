import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../SliderTouch'
import StopPropagationDispatcher from '../StopPropagation'
import { mapIsOverlayShown } from '../../redux/overlay/selector'

const RootTouchManager = forwardRef((props, ref) => {
    const
        dispatchSliderTouch = useRef(),
        stopPropagation = useRef(),
        closeForBodyClick = useRef(),
        isOverlayShown = useSelector(mapIsOverlayShown),
        [isSliderTouchEnding, setIsSliderTouchEnding] = useState(false)

    const dispatchTouchMove = e => {
        if (!isOverlayShown) {
            dispatchSliderTouch.current.move(e)
        }
    }

    const dispatchTouchEnd = () => {
        // If this returns true, then slider touch is ending.
        if (!isOverlayShown && dispatchSliderTouch.current.end()) {
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(() => setIsSliderTouchEnding(false), 200)
            setIsSliderTouchEnding(true)
        }
    }

    const dispatchRootClick = e => {
        if (isOverlayShown) {
            return false
        }

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
