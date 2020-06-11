// Parent component that handles click, touch, and keyDown events.
// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import RootContainer from '../Root'
import KeyManager from '../../managers/Key'
import { isEmailFocused } from '../../utils/email'
import {
    mapQueuedFocus,
    mapShouldFocusLyric
} from '../../redux/focus/selectors'
import { mapCanSliderMount } from '../../redux/mount/selectors'

const FocusContainer = () => {
    const
        dispatch = useDispatch(),
        focusElement = useRef(),
        lyricFocusElement = useRef(),
        dispatchSliderTouch = useRef(),
        stopPropagation = useRef(),
        closeForBodyClick = useRef(),
        dispatchKey = useRef(),
        queuedFocus = useSelector(mapQueuedFocus),
        shouldFocusLyric = useSelector(mapShouldFocusLyric),
        canSliderMount = useSelector(mapCanSliderMount),
        [isSliderTouchEnding, setIsSliderTouchEnding] = useState(false)

    const _focusElementForAccess = () => {
        if (isEmailFocused()) {
            return false
        }

        const
            element = shouldFocusLyric ? lyricFocusElement : focusElement,
            logString = shouldFocusLyric ? 'lyric' : 'focusContainer'

        if (element.current) {
            logFocus(`Focus on ${logString}.`)
            element.current.focus()
        }
    }

    const onTouchMove = e => {
        dispatchSliderTouch.current.dispatchTouchMove(e)
    }

    const _resetTouchEndState = () => {
        setIsSliderTouchEnding(false)
    }

    const onTouchEnd = e => {
        // Slider touch is ending.
        if (dispatchSliderTouch.current.dispatchTouchEnd()) {
            logEvent({ e, componentName: 'FocusContainer' })
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(_resetTouchEndState, 200)
            setIsSliderTouchEnding(true)
        }
    }

    const onClick = e => {
        if (isEmailFocused()) {
            return false
        }

        logEvent({ e, componentName: 'FocusContainer' })

        stopPropagation.current(e)

        if (!isSliderTouchEnding) {
            closeForBodyClick.current()
        }
    }

    const onKeyDown = e => dispatchKey.current.handleKeyDownPress(e)
    const onKeyUp = e => dispatchKey.current.handleKeyUpPress(e)

    useEffect(() => {
        logMount('FocusContainer')
    }, [])

    useEffect(() => {
        if (queuedFocus) {
            _focusElementForAccess()
            dispatch(updateFocusStore({ queuedFocus: false }))
        }
    }, [queuedFocus])

    useEffect(() => {
        _focusElementForAccess()
    }, [shouldFocusLyric])

    return (
        <div
            {...{
                ref: focusElement,
                className: 'FocusContainer',
                tabIndex: -1,
                onClick,

                onKeyDown,
                onKeyUp,

                ...canSliderMount && {
                    onTouchMove,
                    onMouseMove: onTouchMove,

                    onTouchEnd,
                    onTouchCancel: onTouchEnd,
                    onMouseUp: onTouchEnd,
                    onMouseLeave: onTouchEnd
                }
            }}
        >
            <CloseHandler {...{ ref: closeForBodyClick }} />
            <RootContainer {...{ ref: lyricFocusElement }} />
            {canSliderMount && (
                <SliderTouchDispatcher {...{ ref: dispatchSliderTouch }} />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            <KeyManager {...{ ref: dispatchKey }} />
        </div>
    )
}

export default FocusContainer
