import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialNearRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialNearRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'CommercialNearRight'
                )}
            </text>
        </Svg>
    )
}

CommercialNearRight.propTypes = propTypes;

export default CommercialNearRight
