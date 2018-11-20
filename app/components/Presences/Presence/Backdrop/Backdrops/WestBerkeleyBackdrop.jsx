import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WestBerkeleyBackdrop = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'WestBerkeleyBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'WestBerkeleyBackdrop'
                )}
            </text>
        </Svg>
    )
}

WestBerkeleyBackdrop.propTypes = propTypes

export default WestBerkeleyBackdrop
