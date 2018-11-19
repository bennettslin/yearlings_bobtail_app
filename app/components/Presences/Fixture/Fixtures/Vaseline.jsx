import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Vaseline = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Vaseline',
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
                    'Vaseline'
                )}
            </text>
        </Svg>
    )
}

Vaseline.propTypes = propTypes;

export default Vaseline
