import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreCeilingRafter = ({

    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className="TheatreCeilingRafter"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreCeilingRafter.propTypes = propTypes

export default TheatreCeilingRafter
