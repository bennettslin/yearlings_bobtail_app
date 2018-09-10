import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BayAreaBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BayAreaBackdrop',
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
                    'BayAreaBackdrop'
                )}
            </text>
        </Svg>
    )
}

BayAreaBackdrop.propTypes = propTypes;

export default BayAreaBackdrop
