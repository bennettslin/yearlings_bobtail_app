import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HardOnReflection = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'HardOnReflection'
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
                    'HardOnReflection'
                )}
            </text>
        </Svg>
    )
}

HardOnReflection.propTypes = propTypes;

export default HardOnReflection
