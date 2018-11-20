import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Recyclables = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Recyclables',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'Recyclables'
                )}
            </text>
        </Svg>
    )
}

Recyclables.propTypes = propTypes

export default Recyclables
