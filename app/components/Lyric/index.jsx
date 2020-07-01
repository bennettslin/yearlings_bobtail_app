// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useEffect, useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import VerseBar from './VerseBar'
import CarouselAccess from '../Carousel/Access'
import './style'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'

const Lyric = forwardRef((props, ref) => {
    const
        onVerseBarWheel = useRef(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    useEffect(() => {
        logMount('Lyric')
    }, [])

    const onExit = () => {
        logTransition('Lyric did exit.')
    }

    const onEntered = () => {
        logTransition('Lyric did enter.')
    }

    const onWheel = e => {
        onVerseBarWheel.current(e)
    }

    const setRef = node => {
        if (node) {
            onVerseBarWheel.current = node.onVerseBarWheel
            ref.current = node.lyricScrollElement
        }
    }

    return (
        <>
            <CSSTransition
                appear
                {...{
                    in: isSongChangeDone,
                    timeout: 250,
                    classNames: { enterDone: 'Lyric__visible' },
                    onExit,
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
