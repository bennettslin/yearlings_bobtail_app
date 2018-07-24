import React from 'react'
import PropTypes from 'prop-types'

const PunField = ({

    className

}) => (
    <circle
        {...{
            className,
            cx: 50,
            cy: 50,
            r: 50
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

PunField.propTypes = propTypes

export default PunField
