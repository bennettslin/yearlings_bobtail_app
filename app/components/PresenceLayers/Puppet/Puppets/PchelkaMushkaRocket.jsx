import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PchelkaMushkaRocket = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PchelkaMushkaRocket',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'PchelkaMushkaRocket'
                )}
            </text>
        </Svg>
    )
}

PchelkaMushkaRocket.propTypes = propTypes

export default PchelkaMushkaRocket
