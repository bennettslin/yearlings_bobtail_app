// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
    balconyFieldCoordinates: PropTypes.shape({
        top: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        leftWidth: PropTypes.number.isRequired,
        rightWidth: PropTypes.number.isRequired
    }),
    isRight: PropTypes.bool
}

const TheatreBalconyField = ({

    balconyFieldCoordinates,
    isRight

}) => {

    const { top,
            height,
            leftWidth,
            rightWidth } = balconyFieldCoordinates,

        balconyFieldStyle = {
            top: `${top}px`,
            width: `${isRight ? rightWidth : leftWidth}px`,
            height: `${height}px`
        }

    return (
        <div
            className={classnames(
                'field',
                'theatre-balcony-field',
                { 'right': isRight }
            )}
            style={balconyFieldStyle}
        >

        </div>
    )
}

TheatreBalconyField.propTypes = propTypes

export default TheatreBalconyField
