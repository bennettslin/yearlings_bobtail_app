import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Reeling = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Reeling'
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
                    'Reeling'
                )}
            </text>
        </Svg>
    )
}

Reeling.propTypes = propTypes

export default Reeling
