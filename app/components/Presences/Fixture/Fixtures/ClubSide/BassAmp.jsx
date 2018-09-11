import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BassAmp = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BassAmp',
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
                    'BassAmp'
                )}
            </text>
        </Svg>
    )
}

BassAmp.propTypes = propTypes;

export default BassAmp
