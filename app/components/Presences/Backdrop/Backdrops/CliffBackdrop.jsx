import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CliffBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CliffBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'CliffBackdrop'
                )}
            </text>
        </Svg>
    )
}

CliffBackdrop.propTypes = propTypes;

export default CliffBackdrop
