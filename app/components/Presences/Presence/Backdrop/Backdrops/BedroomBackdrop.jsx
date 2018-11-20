import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BedroomBackdrop',
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
                    'BedroomBackdrop'
                )}
            </text>
        </Svg>
    )
}

BedroomBackdrop.propTypes = propTypes

export default BedroomBackdrop
