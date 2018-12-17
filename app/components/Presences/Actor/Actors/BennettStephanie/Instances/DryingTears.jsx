import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DryingTears = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'DryingTears'
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
                    'DryingTears'
                )}
            </text>
        </Svg>
    )
}

DryingTears.propTypes = propTypes

export default DryingTears
