import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Campanile = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Campanile',
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
                    'Campanile'
                )}
            </text>
        </Svg>
    )
}

Campanile.propTypes = propTypes

export default Campanile
