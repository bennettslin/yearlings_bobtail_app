import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Concerned = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Concerned'
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
                    'Concerned'
                )}
            </text>
        </Svg>
    )
}

Concerned.propTypes = propTypes

export default Concerned
