import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotField from './Field'

const propTypes = {
        // From parent.
        className: PropTypes.string
    },

    Dot = ({
        className,
        ...other
    }) => {
        console.error('className', className)
        return (
            <div
                className={cx(
                    'Dot',
                    className
                )}
            >
                <DotField {...other} />
            </div>
        )
    }

Dot.propTypes = propTypes

export default Dot
