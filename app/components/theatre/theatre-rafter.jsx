import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreRafter = ({

    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className="rafter"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreRafter.propTypes = propTypes

export default TheatreRafter
