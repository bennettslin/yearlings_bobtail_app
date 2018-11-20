import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizGateInside = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizGateInside',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'LizGateInside'
                )}
            </text>
        </Svg>
    )
}

LizGateInside.propTypes = propTypes;

export default LizGateInside
