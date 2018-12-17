import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrollShadowRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TrollShadowRight',
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
                    'TrollShadowRight'
                )}
            </text>
        </Svg>
    )
}

TrollShadowRight.propTypes = propTypes

export default TrollShadowRight
