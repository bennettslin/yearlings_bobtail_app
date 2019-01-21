import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Smirking = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Smirking'
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
                    'Smirking'
                )}
            </text>
        </Svg>
    )
}

Smirking.propTypes = propTypes

export default Smirking
