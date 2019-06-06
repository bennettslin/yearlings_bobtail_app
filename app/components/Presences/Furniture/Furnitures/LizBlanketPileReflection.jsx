import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizBlanketPileReflection = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizBlanketPileReflection',
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
                    'LizBlanketPileReflection'
                )}
            </text>
        </Svg>
    )
}

LizBlanketPileReflection.propTypes = propTypes

export default LizBlanketPileReflection
