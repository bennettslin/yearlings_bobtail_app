import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartThoughtBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartThoughtBackdrop',
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
                    'GoKartThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

GoKartThoughtBackdrop.propTypes = propTypes;

export default GoKartThoughtBackdrop
