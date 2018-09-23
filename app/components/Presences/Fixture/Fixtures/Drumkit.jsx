import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Drumkit = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Drumkit',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'Drumkit'
                )}
            </text>
        </Svg>
    )
}

Drumkit.propTypes = propTypes;

export default Drumkit
