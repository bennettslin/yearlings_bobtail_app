import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreSeat = ({

    top,
    left,
    width,
    height

}) => {

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
