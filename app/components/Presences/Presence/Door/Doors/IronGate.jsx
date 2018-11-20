import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const IronGate = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'IronGate',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'IronGate'
                )}
            </text>
        </Svg>
    )
}

IronGate.propTypes = propTypes

export default IronGate
