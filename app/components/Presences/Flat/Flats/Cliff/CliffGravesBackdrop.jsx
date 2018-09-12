import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CliffGravesBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CliffGravesBackdrop',
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
                    'CliffGravesBackdrop'
                )}
            </text>
        </Svg>
    )
}

CliffGravesBackdrop.propTypes = propTypes;

export default CliffGravesBackdrop
