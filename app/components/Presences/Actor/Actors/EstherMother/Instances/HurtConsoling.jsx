import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HurtConsoling = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'HurtConsoling'
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
                    'HurtConsoling'
                )}
            </text>
        </Svg>
    )
}

HurtConsoling.propTypes = propTypes

export default HurtConsoling
