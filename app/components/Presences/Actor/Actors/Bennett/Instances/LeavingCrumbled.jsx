import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LeavingCrumbled = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'LeavingCrumbled'
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
                    'LeavingCrumbled'
                )}
            </text>
        </Svg>
    )
}

LeavingCrumbled.propTypes = propTypes

export default LeavingCrumbled
