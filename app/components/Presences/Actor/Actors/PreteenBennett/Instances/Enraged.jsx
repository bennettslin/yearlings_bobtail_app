import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Enraged = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Enraged'
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
                    'Enraged'
                )}
            </text>
        </Svg>
    )
}

Enraged.propTypes = propTypes;

export default Enraged
