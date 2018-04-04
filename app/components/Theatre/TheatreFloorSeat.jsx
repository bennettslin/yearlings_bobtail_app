import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreFloorSeat = ({

    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className="TheatreFloorSeat"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreFloorSeat.propTypes = propTypes

export default TheatreFloorSeat
