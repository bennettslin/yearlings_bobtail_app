import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    IS_CAROUSEL_SHOWN,
    IS_NAV_SHOWN,
    IS_NEITHER_SHOWN
} from 'constants/options'

const
    CAROUSEL_TOGGLE_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }}
        />
    ),
    NAV_TOGGLE_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 50
            }}
        />
    ),
    NEITHER_ICON = ({
        className
    }) => (
        <path
            {...{
                className,
                x: 0,
                y: 0,
                d: 'M 50,0 L 100,50 L 50,100 L0,50 Z'
            }}
        />
    ),
    CAROUSEL_NAV_MAP = {
        [IS_CAROUSEL_SHOWN]: CAROUSEL_TOGGLE_ICON,
        [IS_NAV_SHOWN]: NAV_TOGGLE_ICON,
        [IS_NEITHER_SHOWN]: NEITHER_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired,
    className: PropTypes.string
}

const CarouselNavIcon = ({
    buttonIdentifier,
    className

}) => {
    const IconComponent = CAROUSEL_NAV_MAP[buttonIdentifier]

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
