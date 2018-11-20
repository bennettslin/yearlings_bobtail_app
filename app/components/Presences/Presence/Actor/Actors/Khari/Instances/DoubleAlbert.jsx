import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DoubleAlbert = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'DoubleAlbert'
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
                    'DoubleAlbert'
                )}
            </text>
        </Svg>
    )
}

DoubleAlbert.propTypes = propTypes

export default DoubleAlbert
