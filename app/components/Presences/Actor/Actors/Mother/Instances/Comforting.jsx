import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Comforting = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Comforting'
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
                    'Comforting'
                )}
            </text>
        </Svg>
    )
}

Comforting.propTypes = propTypes;

export default Comforting
