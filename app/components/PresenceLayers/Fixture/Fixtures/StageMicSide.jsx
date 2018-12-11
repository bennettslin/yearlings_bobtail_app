import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StageMicSide = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'StageMicSide',
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
                    'StageMicSide'
                )}
            </text>
        </Svg>
    )
}

StageMicSide.propTypes = propTypes

export default StageMicSide
