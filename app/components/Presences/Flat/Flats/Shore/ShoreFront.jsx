import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoreFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoreFront',
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
                    'ShoreFront'
                )}
            </text>
        </Svg>
    )
}

ShoreFront.propTypes = propTypes;

export default ShoreFront
