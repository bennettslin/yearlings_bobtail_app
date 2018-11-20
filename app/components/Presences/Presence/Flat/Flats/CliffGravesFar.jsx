import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CliffGravesFar = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'CliffGravesFar',
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
                    'CliffGravesFar'
                )}
            </text>
        </Svg>
    )
}

CliffGravesFar.propTypes = propTypes

export default CliffGravesFar
