import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef
} from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import WheelDispatcher from '../../../dispatchers/Wheel'
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
        lyricScrollElement = useRef(),
        scrollChildren = useRef(),
        dispatchWheel = useRef(),
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
        scrollChildren.current.verse[index]
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
            <Transition
                {...{
                    in: canLyricCarouselUpdate,
                    timeout: 200,
                    onEntered
                }}
            >
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
            </Transition>
            <ScrollOverlayDispatcher
                {...{
                    ref: dispatchScrollTimeout,
                    getLyricScrollElement
                }}
            />
            <VerseBarHandler
                {...{
                    ref: dispatchVerseBarsTimeout,
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
