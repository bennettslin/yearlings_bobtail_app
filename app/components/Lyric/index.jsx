import React, { forwardRef, useEffect, memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import getDidMountHoc from '../DidMountHoc'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import CarouselAccess from '../Carousel/Access'
import { scrollLyricForSongSelect } from '../../redux/scrollLyric/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { getFinalSideKey } from '../../utils/server'
import './style'

const Lyric = forwardRef(({ didMount, pageSongIndex }, ref) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onExit = () => {
        logTransition('Lyric did exit.')
    }

    const onEntered = () => {
        logTransition('Lyric did enter.')
    }

    useEffect(() => {
        logMount('Lyric')
        dispatch(scrollLyricForSongSelect())
    }, [])

    return (
        <PageSongIndexContext.Provider {...{ value: pageSongIndex }} >
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
                            didMount && [
                                'gradientMask__lyricColumn__desktop',
                                'abF',
                                'ovH'
                            ],
                            getFinalSideKey()
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
        </PageSongIndexContext.Provider>
    )
})

Lyric.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageSongIndex: PropTypes.number
}

export default memo(getDidMountHoc(Lyric))
