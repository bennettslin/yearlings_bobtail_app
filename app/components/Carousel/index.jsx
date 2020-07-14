// Section to show all song annotations in a carousel layout.
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import getDidMountHoc from '../DidMountHoc'
import getMainHoc from '../MainHoc'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapCanCarouselShow } from '../../redux/viewport/selector'
import { getFinalSideKey } from '../../utils/server'
import './style'

const Carousel = ({ didMount, style, pageSongIndex }) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canCarouselShow = useSelector(mapCanCarouselShow)

    const onExit = () => {
        logTransition('Carousel did exit.')
    }

    const onEntered = () => {
        logTransition('Carousel did enter.')
    }

    useEffect(() => {
        logMount('Carousel')
        dispatch(scrollCarouselForSongSelect())
    }, [])

    return (
        <PageSongIndexContext.Provider {...{ value: pageSongIndex }}>
            <CSSTransition
                appear
                {...{
                    in: isSongChangeDone,
                    timeout: 250,
                    classNames: { enterDone: 'Carousel__visible' },
                    onExit,
                    onEntered
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Carousel',
                            didMount && [
                                canCarouselShow && 'Carousel__shown',
                                'gradientMask__carousel__desktop',
                                'abF'
                            ],
                            getFinalSideKey()
                        ),
                        ...didMount && { style }
                    }}
                >
                    <CarouselScroll />
                    <CarouselAccess />
                </div>
            </CSSTransition>
        </PageSongIndexContext.Provider>
    )
}

Carousel.propTypes = {
    didMount: PropTypes.bool.isRequired,
    style: PropTypes.object,
    pageSongIndex: PropTypes.number
}

export default memo(getDidMountHoc(getMainHoc(Carousel)))
