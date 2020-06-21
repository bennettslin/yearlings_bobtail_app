// Section to show all song annotations in a carousel layout.
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import LayoutContainer from '../Main/LayoutContainer'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'
import { mapIsSongSelectComplete } from '../../redux/lyric/selector'
import './style'

const Carousel = () => {
    const isSongSelectComplete = useSelector(mapIsSongSelectComplete)

    const onExited = () => {
        logTransition('Carousel did exit.')
    }

    const onEntered = () => {
        logTransition('Carousel did enter.')
    }

    useEffect(() => {
        logMount('Carousel')
    }, [])

    return (
        <CSSTransition
            appear
            {...{
                in: isSongSelectComplete,
                timeout: 250,
                classNames: { enterDone: 'Carousel__visible' },
                onExited,
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

const CarouselLayoutContainer = () => (
    <LayoutContainer>
        <Carousel />
    </ LayoutContainer>
)

export default CarouselLayoutContainer
