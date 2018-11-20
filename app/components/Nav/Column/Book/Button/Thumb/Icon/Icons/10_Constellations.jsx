import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const ConstellationsThumbIcon = ({

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

ConstellationsThumbIcon.propTypes = propTypes

export default ConstellationsThumbIcon
