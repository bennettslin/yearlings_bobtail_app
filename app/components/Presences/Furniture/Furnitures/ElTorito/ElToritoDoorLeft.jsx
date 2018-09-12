import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElToritoDoorLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElToritoDoorLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'ElToritoDoorLeft'
                )}
            </text>
        </Svg>
    )
}

ElToritoDoorLeft.propTypes = propTypes;

export default ElToritoDoorLeft
