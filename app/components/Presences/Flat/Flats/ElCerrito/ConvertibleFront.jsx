import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ConvertibleFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ConvertibleFront',
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
                    'ConvertibleFront'
                )}
            </text>
        </Svg>
    )
}

ConvertibleFront.propTypes = propTypes;

export default ConvertibleFront
