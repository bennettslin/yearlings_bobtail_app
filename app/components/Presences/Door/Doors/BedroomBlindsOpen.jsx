import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomBlindsOpen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BedroomBlindsOpen',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'BedroomBlindsOpen'
                )}
            </text>
        </Svg>
    )
}

BedroomBlindsOpen.propTypes = propTypes;

export default BedroomBlindsOpen
