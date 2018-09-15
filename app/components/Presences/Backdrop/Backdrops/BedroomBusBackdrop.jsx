import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomBusBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BedroomBusBackdrop',
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
                    'BedroomBusBackdrop'
                )}
            </text>
        </Svg>
    )
}

BedroomBusBackdrop.propTypes = propTypes;

export default BedroomBusBackdrop
