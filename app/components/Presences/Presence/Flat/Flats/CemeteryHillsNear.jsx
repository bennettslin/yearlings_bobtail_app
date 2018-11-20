import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CemeteryHillsNear = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CemeteryHillsNear',
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
                    'CemeteryHillsNear'
                )}
            </text>
        </Svg>
    )
}

CemeteryHillsNear.propTypes = propTypes

export default CemeteryHillsNear
