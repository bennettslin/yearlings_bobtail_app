// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useEffect, useRef } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import CSSTransition from 'react-transition-group/CSSTransition'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import VerseBar from './VerseBar'
import CarouselAccess from '../Carousel/Access'
import './style'
import { mapCanLyricCarouselEnter } from '../../redux/entrance/selector'

const Lyric = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        handleVerseBarWheel = useRef(),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter)

    useEffect(() => {
        logMount('Lyric')
    }, [])

    const onExited = () => {
        logTransition('Lyric did exit.')
        dispatch(updateEntranceStore({ didLyricExit: true }))
    }

    const onEntered = () => {
        logTransition('Lyric did enter.')
        dispatch(updateEntranceStore({ didLyricEnter: true }))
    }

    const onWheel = e => {
        handleVerseBarWheel.current(e)
    }

    const setRef = node => {
        if (node) {
            handleVerseBarWheel.current = node.handleVerseBarWheel
            ref.current = node.lyricScrollElement
        }
    }

    return (
        <>
            <CSSTransition
                appear
                {...{
                    in: canLyricCarouselEnter,
                    timeout: 250,
                    classNames: { enterDone: 'Lyric__visible' },
                    onExited,
                    onEntered
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Lyric',
                            'gradientMask__lyricColumn__desktop',
                            'abF',
                            'ovH'
                        )
                    }}
                >
                    {/* These are the only two flex children. */}
                    <VerseBar
                        isAbove
                        {...{ onWheel }}
                    />
                    <VerseBar {...{ onWheel }} />
                    <LyricScroll {...{ ref: setRef }} />
                    <LyricToggles />
                    <LyricToggles isBottomRight />
                    <LyricAccess />
                    <CarouselAccess inLyric />
                </div>
            </CSSTransition>
        </>
    )
})

export default Lyric
