import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FeigningSick = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'FeigningSick'
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
                    'FeigningSick'
                )}
            </text>
        </Svg>
    )
}

FeigningSick.propTypes = propTypes

export default FeigningSick
