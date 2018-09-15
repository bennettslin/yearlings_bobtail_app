import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OaklandBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OaklandBackdrop',
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
                    'OaklandBackdrop'
                )}
            </text>
        </Svg>
    )
}

OaklandBackdrop.propTypes = propTypes;

export default OaklandBackdrop
