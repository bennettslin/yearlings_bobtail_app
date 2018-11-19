import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomBlinds = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BedroomBlinds',
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
                    'BedroomBlinds'
                )}
            </text>
        </Svg>
    )
}

BedroomBlinds.propTypes = propTypes;

export default BedroomBlinds
