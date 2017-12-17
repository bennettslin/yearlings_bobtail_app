// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames'

const propTypes = {
    ceilingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        centrePointFromLeft: PropTypes.number.isRequired
    })
}

const TheatreCeilingField = ({

    ceilingFieldCoordinates

}) => {

    const { height } = ceilingFieldCoordinates,

        ceilingFieldStyle = {
            height: `${height}px`
        }

    return (
        <div
            className="field theatre-ceiling-field"
            style={ceilingFieldStyle}
        >

        </div>
    )
}

TheatreCeilingField.propTypes = propTypes

export default TheatreCeilingField
