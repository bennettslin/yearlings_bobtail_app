import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Noodling = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Noodling'
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
                    'Noodling'
                )}
            </text>
        </Svg>
    )
}

Noodling.propTypes = propTypes

export default Noodling
