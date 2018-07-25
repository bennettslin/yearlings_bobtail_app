import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const
    CAROUSEL_TOGGLE_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 25
            }}
        />
    ),
    NAV_TOGGLE_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 25,
                y: 25,
                width: 50,
                height: 50
            }}
        />
    ),
    CAROUSEL_NAV_MAP = {
        [true]: CAROUSEL_TOGGLE_ICON,
        [false]: NAV_TOGGLE_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const CarouselNavIcon = ({

    buttonIdentifier: carouselNavIndex,
    className

}) => {
    const
        isCarousel = Boolean(carouselNavIndex),
        IconComponent = CAROUSEL_NAV_MAP[isCarousel]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

CarouselNavIcon.propTypes = propTypes

export default CarouselNavIcon
