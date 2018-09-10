import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ValleyBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ValleyBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ValleyBackdrop'
                )}
            </text>
        </Svg>
    )
}

ValleyBackdrop.propTypes = propTypes;

export default ValleyBackdrop
