import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Stoic = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Stoic'
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
                    'Stoic'
                )}
            </text>
        </Svg>
    )
}

Stoic.propTypes = propTypes;

export default Stoic
