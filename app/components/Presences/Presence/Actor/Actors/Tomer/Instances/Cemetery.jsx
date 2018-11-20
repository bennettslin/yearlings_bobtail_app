import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Cemetery = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Cemetery'
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
                    'Cemetery'
                )}
            </text>
        </Svg>
    )
}

Cemetery.propTypes = propTypes

export default Cemetery
