import React from 'react'
import PropTypes from 'prop-types'

import { SEAT_HEIGHT_TO_WIDTH_RATIO } from '../../constants/stage'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

const TheatreSeat = ({

    top,
    left,
    width

}) => {

    const height = width * SEAT_HEIGHT_TO_WIDTH_RATIO

    return (
        <rect
            className="seat"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreSeat.propTypes = propTypes

export default TheatreSeat
