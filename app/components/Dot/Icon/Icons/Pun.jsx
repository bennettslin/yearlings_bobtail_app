import React, { memo } from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const PunIcon = memo(({

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
))

const propTypes = {
    className: PropTypes.string
}

PunIcon.propTypes = propTypes

export default PunIcon
