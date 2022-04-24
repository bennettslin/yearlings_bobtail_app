// Parent component that handles focus events.
import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import ResizeManager from '../../managers/Resize'
import Theatre from '../../components/Theatre'
import Main from '../../components/Main'
import CarouselMain from '../../components/CarouselMain'
import LyricOverview from '../../components/LyricOverview'
import Menu from '../../components/Menu'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'
import WrapperContainer from '../Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { updateQueuedFocus } from '../../redux/focus/action'
import RootTouchDispatcher from '../../dispatchers/RootTouch'
import KeyManager from '../../managers/Key'
import { isEmailFocused } from '../../utils/email'
import {
    mapQueuedFocus,
    mapShouldNavigateLyric,
} from '../../redux/focus/selector'
import { mapIsAboutShown, mapIsPromoShown } from '../../redux/toggle/selector'
import { mapCanSliderMount } from '../../redux/viewport/selector'

const RootContainer = () => {
    const
        dispatch = useDispatch(),
        rootContainerElement = useRef(),
        lyricScrollElement = useRef(),
        promoScrollElement = useRef(),
        dispatchRootTouch = useRef(),
        handleKey = useRef(),
        queuedFocus = useSelector(mapQueuedFocus),
        shouldNavigateLyric = useSelector(mapShouldNavigateLyric),
        isAboutShown = useSelector(mapIsAboutShown),
        isPromoShown = useSelector(mapIsPromoShown),
        canSliderMount = useSelector(mapCanSliderMount)

    const getResizeContainerElement = () => rootContainerElement.current

    const _focusElementForAccess = () => {
        if (isEmailFocused()) {
            return false
        }

        let currentElement = rootContainerElement?.current,
            logString = 'root'

        if (isPromoShown) {
            currentElement = promoScrollElement?.current
            logString = 'promo'

        } else if (shouldNavigateLyric) {
            currentElement = lyricScrollElement?.current
            logString = 'lyric'
        }

        if (currentElement?.focus) {
            logGeneral(`Focus on ${logString}.`)
            currentElement.focus()
        }
    }

    const onTouchMove = e => dispatchRootTouch.current.move(e)
    const onTouchEnd = e => dispatchRootTouch.current.end(e)
    const onClick = e => dispatchRootTouch.current.click(e)
    const onKeyDown = e => handleKey.current.down(e)
    const onKeyUp = e => handleKey.current.up(e)

    useEffect(() => {
        logMount('RootContainer')
    }, [])

    useEffect(() => {
        if (queuedFocus) {
            _focusElementForAccess()
            dispatch(updateQueuedFocus())
        }
    }, [queuedFocus])

    useEffect(() => {
        _focusElementForAccess()
    }, [isAboutShown, isPromoShown, shouldNavigateLyric])

    return (
        <div
            {...{
                ref: rootContainerElement,
                className: cx(
                    'RootContainer',
                    'rootContainer',
                    'font__text',
                    'abF',
                    'ovH',
                ),
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
                    onMouseLeave: onTouchEnd,
                },
            }}
        >
            <ResizeManager {...{ getResizeContainerElement }} />
            <WrapperContainer>
                <Theatre />
                <CarouselMain />
                <Main />
                <LyricOverview {...{ ref: lyricScrollElement }} />
                <PopupOverlay />
                <MainPopups {...{ ref: promoScrollElement }} />
                <Menu />
                <TouchOverlay />
            </WrapperContainer>
            <RootTouchDispatcher {...{ ref: dispatchRootTouch }} />
            <KeyManager {...{ ref: handleKey }} />
        </div>
    )
}

export default RootContainer
