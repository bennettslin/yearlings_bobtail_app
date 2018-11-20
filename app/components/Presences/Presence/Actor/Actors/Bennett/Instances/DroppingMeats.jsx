import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DroppingMeats = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'DroppingMeats'
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
                    'DroppingMeats'
                )}
            </text>
        </Svg>
    )
}

DroppingMeats.propTypes = propTypes;

export default DroppingMeats
