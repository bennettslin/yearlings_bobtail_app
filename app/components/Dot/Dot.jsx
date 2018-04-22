import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const dotPropTypes = {
    // From parent.
    className: PropTypes.any
},

Dot = ({

    className,

...other }) => (

    <div {...other}
        className={cx(
            'Dot',
            className
        )}
    />
)

Dot.propTypes = dotPropTypes

export default Dot
