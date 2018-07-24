import React from 'react'
import PropTypes from 'prop-types'

const CAROUSEL_NAV_MAP = {
    [true]: (
        <circle
            {...{
                cx: 50,
                cy: 50,
                r: 25,
                fill: 'orange',
                stroke: 'red'
            }}
        />
    ),
    [false]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'green',
                stroke: 'yellow'
            }}
        />
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const CarouselNavIcon = ({

    buttonIdentifier: carouselNavIndex

}) => {
    const isCarousel = Boolean(carouselNavIndex)

    return (
        CAROUSEL_NAV_MAP[isCarousel]
    )
}

CarouselNavIcon.propTypes = propTypes

export default CarouselNavIcon
