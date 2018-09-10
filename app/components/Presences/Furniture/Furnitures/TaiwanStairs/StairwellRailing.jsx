import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StairwellRailing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StairwellRailing',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'StairwellRailing'
                )}
            </text>
        </Svg>
    )
}

StairwellRailing.propTypes = propTypes;

export default StairwellRailing
