// Section to show all song annotations in a carousel layout.

import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { mapCanLyricCarouselEnter } from '../../redux/entrance/selectors'
import CSSTransition from 'react-transition-group/CSSTransition'
import LayoutContainer from '../Main/LayoutContainer'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'
import './style'

const Carousel = () => {
    const
        dispatch = useDispatch(),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        _handleTransitionExited = () => {
            logTransition('Carousel did exit.')
            dispatch(updateEntranceStore({ didCarouselExit: true }))
        },
        _handleTransitionEntered = () => {
            logTransition('Carousel did enter.')
            dispatch(updateEntranceStore({ didCarouselEnter: true }))
        }

    useEffect(() => {
        logMount('Carousel')
    }, [])

    return (
        <CSSTransition
            appear
            mountOnEnter
            {...{
                in: canLyricCarouselEnter,
                timeout: 250,
                classNames: { enterDone: 'Carousel__visible' },
                onExited: _handleTransitionExited,
                onEntered: _handleTransitionEntered
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

const CarouselLayoutContainer = () => (
    <LayoutContainer>
        <Carousel />
    </ LayoutContainer>
)

export default CarouselLayoutContainer
