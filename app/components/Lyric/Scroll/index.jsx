import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef
} from 'react'
import cx from 'classnames'
import WheelDispatcher from '../../../dispatchers/Wheel'
import ScrollLyricListener from '../../../listeners/Scroll/Lyric'
import ScrollOverlayDispatcher from '../../../dispatchers/ScrollOverlay'
import VerseBarHandler from '../../../handlers/VerseBar'
import Stanzas from '../../Stanzas'
import { IS_TOUCH_SUPPORTED } from '../../../constants/device'
import './style'

const LyricScroll = forwardRef((props, ref) => {
    const
        lyricScrollElement = useRef(),
        scrollChildren = useRef(),
        dispatchWheel = useRef(),
        dispatchScroll = useRef(),
        dispatchVerseBars = useRef()

    const onScroll = () => {
        dispatchVerseBars.current()
        dispatchScroll.current()
    }

    const onWheel = e => {
        dispatchWheel.current.lyric(
            e, lyricScrollElement.current
        )
    }

    const getLyricScrollElement = () => (
        lyricScrollElement.current
    )

    const getScrollAnchorChild = index => (
        scrollChildren.current.anchor[index]
    )

    const getScrollVerseChild = index => (
        scrollChildren.current && scrollChildren.current.verse[index]
    )

    const handleVerseBarWheel = e => {
        dispatchWheel.current.verseBar(
            e, lyricScrollElement.current
        )
    }

    useEffect(() => {
        logMount('LyricScroll')
    }, [])

    useImperativeHandle(ref, () => ({
        handleVerseBarWheel,
        lyricScrollElement: lyricScrollElement.current
    }))

    return (
        <>
            <ScrollLyricListener {...{
                getLyricScrollElement,
                getScrollAnchorChild,
                getScrollVerseChild
            }} />
            <div
                {...{
                    ref: lyricScrollElement,
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
            <ScrollOverlayDispatcher
                {...{
                    ref: dispatchScroll,
                    getLyricScrollElement
                }}
            />
            <VerseBarHandler
                {...{
                    ref: dispatchVerseBars,
                    getScrollVerseChild
                }}
            />
            <WheelDispatcher
                {...{
                    ref: dispatchWheel,
                    determineVerseBars: onScroll
                }}
            />
        </>
    )
})

export default LyricScroll
