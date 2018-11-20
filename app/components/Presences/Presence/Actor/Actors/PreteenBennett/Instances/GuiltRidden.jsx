import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GuiltRidden = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'GuiltRidden'
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
                    'GuiltRidden'
                )}
            </text>
        </Svg>
    )
}

GuiltRidden.propTypes = propTypes

export default GuiltRidden
