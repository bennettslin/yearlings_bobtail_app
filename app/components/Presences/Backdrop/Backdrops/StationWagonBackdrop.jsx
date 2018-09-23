import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StationWagonBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StationWagonBackdrop',
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
                    'StationWagonBackdrop'
                )}
            </text>
        </Svg>
    )
}

StationWagonBackdrop.propTypes = propTypes;

export default StationWagonBackdrop
