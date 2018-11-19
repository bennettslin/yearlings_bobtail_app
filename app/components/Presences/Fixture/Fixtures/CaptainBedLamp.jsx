import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CaptainBedLamp = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CaptainBedLamp',
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
                    'CaptainBedLamp'
                )}
            </text>
        </Svg>
    )
}

CaptainBedLamp.propTypes = propTypes;

export default CaptainBedLamp
