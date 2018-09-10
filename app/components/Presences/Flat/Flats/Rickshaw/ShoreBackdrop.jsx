import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoreBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoreBackdrop',
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
                    'ShoreBackdrop'
                )}
            </text>
        </Svg>
    )
}

ShoreBackdrop.propTypes = propTypes;

export default ShoreBackdrop
