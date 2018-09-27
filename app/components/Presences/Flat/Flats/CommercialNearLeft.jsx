import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialNearLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialNearLeft',
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
                    'CommercialNearLeft'
                )}
            </text>
        </Svg>
    )
}

CommercialNearLeft.propTypes = propTypes;

export default CommercialNearLeft
