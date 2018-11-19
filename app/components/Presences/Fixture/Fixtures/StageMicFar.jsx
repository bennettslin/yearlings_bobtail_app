import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StageMicFar = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StageMicFar',
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
                    'StageMicFar'
                )}
            </text>
        </Svg>
    )
}

StageMicFar.propTypes = propTypes;

export default StageMicFar
