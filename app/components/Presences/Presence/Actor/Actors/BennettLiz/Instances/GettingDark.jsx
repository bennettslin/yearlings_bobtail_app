import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GettingDark = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'GettingDark'
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
                    'GettingDark'
                )}
            </text>
        </Svg>
    )
}

GettingDark.propTypes = propTypes

export default GettingDark
