// Section to show all song annotations in a carousel layout.
import React, { useEffect, memo } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import LayoutContainer from '../Main/LayoutContainer'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapCanCarouselShow } from '../../redux/viewport/selector'
import './style'

const Carousel = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

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
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop'
                )}
            >
                <CarouselScroll />
                <CarouselAccess />
            </div>
        </CSSTransition>
    )
}

const CarouselLayoutContainer = () => {
    const canCarouselShow = useSelector(mapCanCarouselShow)

    return (
        <LayoutContainer
            {...{
                className: cx(
                    'CarouselLayoutContainer',
                    canCarouselShow && 'CarouselLayoutContainer__shown'
                )
            }}
        >
            <Carousel />
        </ LayoutContainer>
    )
}

export default memo(CarouselLayoutContainer)
