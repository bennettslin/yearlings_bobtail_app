import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const WallBalcony = ({
    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            {...{
                className: 'WallBalcony',
                x: left,
                y: top,
                width: width,
                height: height
            }}
        />
    )
}

WallBalcony.propTypes = propTypes

export default WallBalcony
