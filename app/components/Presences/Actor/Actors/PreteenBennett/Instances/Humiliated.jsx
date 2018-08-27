import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Humiliated = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Humiliated'
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
                    'Humiliated'
                )}
            </text>
        </Svg>
    )
}

Humiliated.propTypes = propTypes;

export default Humiliated
