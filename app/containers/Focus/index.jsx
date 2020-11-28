// Parent component that handles click, touch, and keyDown events.
import React, { useEffect, useRef, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import RootTouchDispatcher from '../../dispatchers/RootTouch'
import RootContainer from '../Root'
import KeyManager from '../../managers/Key'
import { isEmailFocused } from '../../utils/email'
import {
    mapQueuedFocus,
    mapShouldNavigateLyric
} from '../../redux/focus/selector'
import { mapIsAboutShown } from '../../redux/toggle/selector'
import { mapCanSliderMount } from '../../redux/viewport/selector'

const FocusContainer = () => {
    const
        dispatch = useDispatch(),
        // aboutElement = useRef(),
        focusContainerElement = useRef(),
        lyricScrollElement = useRef(),
        dispatchRootTouch = useRef(),
        handleKey = useRef(),
        queuedFocus = useSelector(mapQueuedFocus),
        shouldNavigateLyric = useSelector(mapShouldNavigateLyric),
        isAboutShown = useSelector(mapIsAboutShown),
        canSliderMount = useSelector(mapCanSliderMount)

    const _focusElementForAccess = () => {
        if (isEmailFocused()) {
            return false
        }

        let element = focusContainerElement,
            logString = 'focusContainer'

        if (isAboutShown) {
            // TODO: Put focus on aboutElement.
            element = focusContainerElement
            logString = 'about'

        } else if (shouldNavigateLyric) {
            element = lyricScrollElement
            logString = 'lyric'
        }

        // TODO: Figure out why the focus function isn't being passed in ref.
        if (element.current && element.current.focus) {
            logFocus(`Focus on ${logString}.`)
            element.current.focus()
        }
    }

    const onTouchMove = e => dispatchRootTouch.current.move(e)
    const onTouchEnd = e => dispatchRootTouch.current.end(e)
    const onClick = e => dispatchRootTouch.current.click(e)
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
    }, [isAboutShown, shouldNavigateLyric])

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
            <RootContainer {...{ ref: lyricScrollElement }} />
            <RootTouchDispatcher {...{ ref: dispatchRootTouch }} />
            <KeyManager {...{ ref: handleKey }} />
        </div>
    )
}

export default memo(FocusContainer)
