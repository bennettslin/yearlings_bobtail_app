import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WeddingCrowd = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'WeddingCrowd',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'WeddingCrowd'
                )}
            </text>
        </Svg>
    )
}

WeddingCrowd.propTypes = propTypes;

export default WeddingCrowd
