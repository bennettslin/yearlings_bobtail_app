import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const InverseThoughtBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'InverseThoughtBackdrop',
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
                    'InverseThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

InverseThoughtBackdrop.propTypes = propTypes;

export default InverseThoughtBackdrop
