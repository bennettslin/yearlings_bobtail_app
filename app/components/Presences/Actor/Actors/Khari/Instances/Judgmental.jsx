import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Judgmental = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Judgmental'
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
                    'Judgmental'
                )}
            </text>
        </Svg>
    )
}

Judgmental.propTypes = propTypes;

export default Judgmental
