import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FeigningFear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'FeigningFear'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'FeigningFear'
                )}
            </text>
        </Svg>
    )
}

FeigningFear.propTypes = propTypes;

export default FeigningFear
