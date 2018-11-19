import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Peahen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Peahen',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'Peahen'
                )}
            </text>
        </Svg>
    )
}

Peahen.propTypes = propTypes;

export default Peahen
