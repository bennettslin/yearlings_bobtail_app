import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Shore = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Shore'
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
                    'Shore'
                )}
            </text>
        </Svg>
    )
}

Shore.propTypes = propTypes

export default Shore
