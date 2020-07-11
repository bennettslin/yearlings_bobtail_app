// Parent component that handles click, touch, and keyDown events.
import React, { useEffect, useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import CloseHandler from '../../managers/Close'
import SliderTouchDispatcher from '../../dispatchers/SliderTouch'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import RootContainer from '../Root'
import KeyManager from '../../managers/Key'
import { isEmailFocused } from '../../utils/email'
import {
    mapQueuedFocus,
    mapShouldFocusLyric
} from '../../redux/focus/selector'
import { mapCanSliderMount } from '../../redux/viewport/selector'

const FocusContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        focusContainerElement = useRef(),
        lyricScrollElement = useRef(),
        dispatchSliderTouch = useRef(),
        stopPropagation = useRef(),
        closeForBodyClick = useRef(),
        handleKey = useRef(),
        queuedFocus = useSelector(mapQueuedFocus),
        shouldFocusLyric = useSelector(mapShouldFocusLyric),
        canSliderMount = useSelector(mapCanSliderMount),
        [isSliderTouchEnding, setIsSliderTouchEnding] = useState(false)

    const _focusElementForAccess = () => {
        if (isEmailFocused()) {
            return false
        }

        const
            element = shouldFocusLyric ?
                lyricScrollElement :
                focusContainerElement,
            logString = shouldFocusLyric ? 'lyric' : 'focusContainer'

        if (element.current) {
            logFocus(`Focus on ${logString}.`)
            element.current.focus()
        }
    }

    const onTouchMove = e => {
        dispatchSliderTouch.current.move(e)
    }

    const onTouchEnd = e => {
        // If this returns true, then slider touch is ending.
        if (dispatchSliderTouch.current.end()) {
            logEvent({ e, componentName: 'FocusContainer' })
            /**
             * Ignore body click event that gets triggered after touch end on
             * slider, to prevent it from closing out of overlay.
             */
            setTimeout(() => setIsSliderTouchEnding(false), 200)
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

    const onKeyDown = e => handleKey.current.down(e)
    const onKeyUp = e => handleKey.current.up(e)

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
                ref: focusContainerElement,
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
            <RootContainer {...{ ref: lyricScrollElement }}>
                {children}
            </RootContainer>
            <SliderTouchDispatcher {...{ ref: dispatchSliderTouch }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            <KeyManager {...{ ref: handleKey }} />
        </div>
    )
}

FocusContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(FocusContainer)
