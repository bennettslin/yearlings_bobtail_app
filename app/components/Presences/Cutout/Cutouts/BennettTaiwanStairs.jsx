import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettTaiwanStairs = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettTaiwanStairs',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'BennettTaiwanStairs'
                )}
            </text>
        </Svg>
    )
}

BennettTaiwanStairs.propTypes = propTypes;

export default BennettTaiwanStairs
