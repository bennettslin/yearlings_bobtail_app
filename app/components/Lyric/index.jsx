import React, { forwardRef, useEffect, memo } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import CarouselAccess from '../Carousel/Access'
import './style'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'

const Lyric = forwardRef((props, ref) => {
    const
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
                    <LyricScroll {...{ ref }} />
                    <LyricToggles />
                    <LyricToggles isBottomRight />
                    <LyricAccess />
                    <CarouselAccess inLyric />
                </div>
            </CSSTransition>
        </>
    )
})

export default memo(Lyric)
