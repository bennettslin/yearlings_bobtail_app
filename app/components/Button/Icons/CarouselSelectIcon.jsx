import React from 'react'
import PropTypes from 'prop-types'

import {
    LEFT,
    RIGHT
} from '../../../constants/lyrics'

const CAROUSEL_SELECT_ICON = {
    [LEFT]: (
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
    [RIGHT]: (
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
    buttonIdentifier: PropTypes.string.isRequired
}

const CarouselSelectIcon = ({

    buttonIdentifier: navDirection

}) => (

    CAROUSEL_SELECT_ICON[navDirection]
)

CarouselSelectIcon.propTypes = propTypes

export default CarouselSelectIcon
