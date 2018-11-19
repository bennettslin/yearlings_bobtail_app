import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const CeilingRafter = ({
    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            {...{
                className: 'CeilingRafter',
                x: left,
                y: top,
                width: width,
                height: height
            }}
        />
    )
}

CeilingRafter.propTypes = propTypes

export default CeilingRafter
