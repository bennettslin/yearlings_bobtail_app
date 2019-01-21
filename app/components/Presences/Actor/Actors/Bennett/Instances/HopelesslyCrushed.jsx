import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HopelesslyCrushed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'HopelesslyCrushed'
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
                    'HopelesslyCrushed'
                )}
            </text>
        </Svg>
    )
}

HopelesslyCrushed.propTypes = propTypes

export default HopelesslyCrushed
