import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const InverseThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'InverseThought',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'InverseThought'
                )}
            </text>
        </Svg>
    )
}

InverseThought.propTypes = propTypes;

export default InverseThought
