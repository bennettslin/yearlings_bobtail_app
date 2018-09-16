import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoreBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoreBack',
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
                    'ShoreBack'
                )}
            </text>
        </Svg>
    )
}

ShoreBack.propTypes = propTypes;

export default ShoreBack
