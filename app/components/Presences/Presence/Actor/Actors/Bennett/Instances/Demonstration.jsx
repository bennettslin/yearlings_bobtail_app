import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Demonstration = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Demonstration'
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
                    'Demonstration'
                )}
            </text>
        </Svg>
    )
}

Demonstration.propTypes = propTypes

export default Demonstration
