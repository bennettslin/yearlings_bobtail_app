import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomSirenBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BedroomSirenBackdrop',
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
                    'BedroomSirenBackdrop'
                )}
            </text>
        </Svg>
    )
}

BedroomSirenBackdrop.propTypes = propTypes;

export default BedroomSirenBackdrop
