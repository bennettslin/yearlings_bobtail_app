import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef
} from 'react'
import cx from 'classnames'
import AutoScrollDispatcher from '../../../dispatchers/AutoScroll'
import ScrollLyricListener from '../../../handlers/Scroll/Lyric'
import ScrollOverlayDispatcher from '../../../dispatchers/ScrollOverlay'
import VerseBarHandler from '../../../handlers/VerseBar'
import Stanzas from '../../Stanzas'
import { IS_TOUCH_SUPPORTED } from '../../../constants/device'
import './style'

const LyricScroll = forwardRef((props, ref) => {
    const
        lyricScrollElement = useRef(),
        scrollChildren = useRef(),
        determineAutoScroll = useRef(),
        determineScrollOverlay = useRef(),
        determineVerseBars = useRef()

    const onScroll = () => {
        determineScrollOverlay.current()
    }

    const onWheel = e => {
        determineVerseBars.current()
        determineAutoScroll.current(
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

    const onVerseBarWheel = e => {
        /**
         * When verse bar is wheeled, offset the lyric scroll element as if it
         * had been wheeled instead.
         */
        const { deltaY } = e.nativeEvent
        lyricScrollElement.current.scrollTop += deltaY

        onWheel()
    }

    useEffect(() => {
        logMount('LyricScroll')
    }, [])

    useImperativeHandle(ref, () => ({
        onVerseBarWheel,
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
                    ref: determineScrollOverlay,
                    getLyricScrollElement
                }}
            />
            <VerseBarHandler
                {...{
                    ref: determineVerseBars,
                    getScrollVerseChild
                }}
            />
            <AutoScrollDispatcher {...{ ref: determineAutoScroll }} />
        </>
    )
})

export default LyricScroll
