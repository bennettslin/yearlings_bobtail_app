// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames'

const propTypes = {
    seatingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        centrePointFromLeft: PropTypes.number.isRequired
    })
}

const TheatreSeatingField = ({

    seatingFieldCoordinates

}) => {

    const { height } = seatingFieldCoordinates,

        seatingFieldStyle = {
            height: `${height}px`
        }

    return (
        <div
            className="field theatre-seating-field"
            style={seatingFieldStyle}
        >

        </div>
    )
}

TheatreSeatingField.propTypes = propTypes

export default TheatreSeatingField
