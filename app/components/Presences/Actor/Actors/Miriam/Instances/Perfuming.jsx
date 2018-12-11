import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Perfuming = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Perfuming'
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
                    'Perfuming'
                )}
            </text>
        </Svg>
    )
}

Perfuming.propTypes = propTypes

export default Perfuming
