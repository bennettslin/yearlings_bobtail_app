import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BackpackJewishBoy = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BackpackJewishBoy',
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
                    'BackpackJewishBoy'
                )}
            </text>
        </Svg>
    )
}

BackpackJewishBoy.propTypes = propTypes

export default BackpackJewishBoy
