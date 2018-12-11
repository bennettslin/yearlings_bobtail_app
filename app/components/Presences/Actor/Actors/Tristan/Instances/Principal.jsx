import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Principal = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Principal'
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
                    'Principal'
                )}
            </text>
        </Svg>
    )
}

Principal.propTypes = propTypes

export default Principal
