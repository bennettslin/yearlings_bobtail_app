// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import ScrollLyricListener from '../../../listeners/Scroll/Lyric'
import ScrollOverlayDispatcher from '../../../dispatchers/ScrollOverlay'
import VerseBarHandler from '../../../handlers/VerseBar'
import Stanzas from '../../Stanzas'
import { IS_TOUCH_SUPPORTED } from '../../../constants/device'
import './style'
import { mapCanLyricCarouselUpdate } from '../../../redux/entrance/selectors'

const LyricScroll = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        scrollParent = useRef(),
        scrollChildren = useRef(),
        dispatchLyricWheel = useRef(),
        dispatchScrollTimeout = useRef(),
        dispatchVerseBarsTimeout = useRef(),
        canLyricCarouselUpdate = useSelector(mapCanLyricCarouselUpdate)

    const onEntered = () => {
        logTransition('Lyric did update from LyricScroll.')
        dispatch(updateEntranceStore({ didLyricUpdate: true }))
    }

    const onScroll = () => {
        dispatchVerseBarsTimeout.current()
        dispatchScrollTimeout.current()
    }

    const onWheel = e => {
        dispatchLyricWheel.current.dispatchLyricTouchMoveOrWheel(
            e, scrollParent.current
        )
    }

    const getLyricScrollParent = () => (
        scrollParent.current
    )

    const getScrollAnnotationChild = index => (
        scrollChildren.current.annotation[index]
    )

    const getScrollVerseChild = index => (
        scrollChildren.current.verse[index]
    )

    const handleVerseBarWheel = e => {
        dispatchLyricWheel.current.dispatchVerseBarWheel(
            e, scrollParent.current
        )
    }

    useImperativeHandle(ref, () => ({
        handleVerseBarWheel,
        lyricScroll: scrollParent.current
    }))

    return (
        <>
            <ScrollLyricListener {...{
                getLyricScrollParent,
                getScrollAnnotationChild,
                getScrollVerseChild
            }} />
            <Transition
                {...{
                    in: canLyricCarouselUpdate,
                    timeout: 200,
                    onEntered
                }}
            >
                <div
                    {...{
                        ref: scrollParent,
                        className: cx(
                            'LyricScroll',
                            'abF',

                            /**
                             * This gradient does not obscure the lyric
                             * toggle buttons.
                             */
                            'gradientMask__lyricScroll'
                        ),
                        tabIndex: -1,
                        onScroll,
                        onWheel,
                        ...IS_TOUCH_SUPPORTED && {
                            onTouchMove: onWheel
                        }
                    }}
                >
                    <Stanzas {...{ ref: scrollChildren }} />
                </div>
            </Transition>
            <ScrollOverlayDispatcher
                {...{
                    ref: dispatchScrollTimeout,
                    getLyricScrollParent
                }}
            />
            <VerseBarHandler
                {...{
                    ref: dispatchVerseBarsTimeout,
                    getScrollVerseChild
                }}
            />
            <LyricWheelDispatcher
                {...{
                    ref: dispatchLyricWheel,
                    determineVerseBars: onScroll
                }}
            />
        </>
    )
})

export default LyricScroll
