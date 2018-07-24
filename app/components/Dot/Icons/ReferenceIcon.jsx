import React from 'react'
import PropTypes from 'prop-types'

const ReferenceIcon = ({

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

ReferenceIcon.propTypes = propTypes

export default ReferenceIcon
