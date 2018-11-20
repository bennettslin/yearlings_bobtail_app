import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Cashbox = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Cashbox',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'Cashbox'
                )}
            </text>
        </Svg>
    )
}

Cashbox.propTypes = propTypes

export default Cashbox
