import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Present = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Present'
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
                    'Present'
                )}
            </text>
        </Svg>
    )
}

Present.propTypes = propTypes;

export default Present
