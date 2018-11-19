import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const TitleIcon = ({
    className
}) => (
        <rect
        {...{
            className,
            x: 0,
            y: 0,
            width: 100,
            height: 100
        }}
    />
)

const propTypes = {
    className: PropTypes.string
}

TitleIcon.propTypes = propTypes

export default TitleIcon
