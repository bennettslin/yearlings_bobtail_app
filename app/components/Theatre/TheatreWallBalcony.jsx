import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreWallBalcony = ({

    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className="TheatreWallBalcony"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreWallBalcony.propTypes = propTypes

export default TheatreWallBalcony
