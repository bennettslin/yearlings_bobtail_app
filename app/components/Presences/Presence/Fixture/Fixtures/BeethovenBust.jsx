import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BeethovenBust = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BeethovenBust',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'BeethovenBust'
                )}
            </text>
        </Svg>
    )
}

BeethovenBust.propTypes = propTypes

export default BeethovenBust
