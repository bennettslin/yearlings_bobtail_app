/**
 * TODO: Placeholder for icon that will eventually be an actual svg. For now,
 * only styling is width, height, and background colour.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Icon2 = ({

    className,

}) => (
    <div className={cx(
        className
    )} />
)

Icon2.propTypes = propTypes

export default Icon2
