// Section to show all song annotations in a carousel layout.
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import getMainHoc from '../MainHoc'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapCanCarouselShow } from '../../redux/viewport/selector'
import './style'

const Carousel = ({ className, style }) => {
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
                        canCarouselShow && 'Carousel__shown',
                        'gradientMask__carousel__desktop',
                        className
                    ),
                    style
                }}
            >
                <CarouselScroll />
                <CarouselAccess />
            </div>
        </CSSTransition>
    )
}

Carousel.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

export default memo(getMainHoc(Carousel))
