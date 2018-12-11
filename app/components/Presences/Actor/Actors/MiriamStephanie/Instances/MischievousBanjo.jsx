import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MischievousBanjo = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'MischievousBanjo'
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
                    'MischievousBanjo'
                )}
            </text>
        </Svg>
    )
}

MischievousBanjo.propTypes = propTypes

export default MischievousBanjo
