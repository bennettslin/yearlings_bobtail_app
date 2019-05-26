import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BloodyTowelReflection = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BloodyTowelReflection',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'BloodyTowelReflection'
                )}
            </text>
        </Svg>
    )
}

BloodyTowelReflection.propTypes = propTypes

export default BloodyTowelReflection
