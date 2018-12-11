import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WeddingPlatform = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WeddingPlatform',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'WeddingPlatform'
                )}
            </text>
        </Svg>
    )
}

WeddingPlatform.propTypes = propTypes

export default WeddingPlatform
