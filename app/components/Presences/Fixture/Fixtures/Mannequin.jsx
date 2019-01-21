import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Mannequin = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Mannequin',
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
                    'Mannequin'
                )}
            </text>
        </Svg>
    )
}

Mannequin.propTypes = propTypes

export default Mannequin
