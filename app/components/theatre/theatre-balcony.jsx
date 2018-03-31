import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const TheatreBalcony = ({

    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className="balcony"
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

TheatreBalcony.propTypes = propTypes

export default TheatreBalcony
