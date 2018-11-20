import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Mingling = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Mingling'
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
                    'Mingling'
                )}
            </text>
        </Svg>
    )
}

Mingling.propTypes = propTypes

export default Mingling
