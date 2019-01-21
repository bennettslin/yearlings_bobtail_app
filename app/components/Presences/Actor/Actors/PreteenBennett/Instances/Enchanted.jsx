import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Enchanted = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Enchanted'
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
                    'Enchanted'
                )}
            </text>
        </Svg>
    )
}

Enchanted.propTypes = propTypes

export default Enchanted
