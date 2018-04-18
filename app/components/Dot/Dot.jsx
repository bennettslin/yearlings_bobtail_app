import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const dotPropTypes = {
    // From parent.
    className: PropTypes.any,
    children: PropTypes.element
},

Dot = ({

    className,
    children,

...other }) => (

    <div {...other}
        className={cx(
            'Dot',
            className
        )}
    >
        {children}
    </div>
)

Dot.propTypes = dotPropTypes

export default Dot
