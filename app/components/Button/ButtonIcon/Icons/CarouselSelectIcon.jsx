import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    LEFT,
    RIGHT
} from 'constants/lyrics'

const
    LEFT_SELECT_ICON = ({
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
    RIGHT_SELECT_ICON = ({
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
    CAROUSEL_SELECT_MAP = {
        [LEFT]: LEFT_SELECT_ICON,
        [RIGHT]: RIGHT_SELECT_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired,
    className: PropTypes.string
}

const CarouselSelectIcon = ({

    buttonIdentifier: navDirection,
    className

}) => {
    const IconComponent = CAROUSEL_SELECT_MAP[navDirection]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

CarouselSelectIcon.propTypes = propTypes

export default CarouselSelectIcon
