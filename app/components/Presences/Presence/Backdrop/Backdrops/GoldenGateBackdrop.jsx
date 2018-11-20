import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoldenGateBackdrop = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'GoldenGateBackdrop',
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
                    'GoldenGateBackdrop'
                )}
            </text>
        </Svg>
    )
}

GoldenGateBackdrop.propTypes = propTypes

export default GoldenGateBackdrop
