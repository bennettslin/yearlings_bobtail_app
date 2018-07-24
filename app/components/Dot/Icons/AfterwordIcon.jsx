import React from 'react'
import PropTypes from 'prop-types'

const AfterwordIcon = ({

    className

}) => (
    <circle
        {...{
            className,
            cx: 50,
            cy: 50,
            r: 25
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

AfterwordIcon.propTypes = propTypes

export default AfterwordIcon
