import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Walgreens = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Walgreens'
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
                    'Walgreens'
                )}
            </text>
        </Svg>
    )
}

Walgreens.propTypes = propTypes

export default Walgreens
