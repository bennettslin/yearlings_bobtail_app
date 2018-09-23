import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HospitalRecordPlayer = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'HospitalRecordPlayer',
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
                    'HospitalRecordPlayer'
                )}
            </text>
        </Svg>
    )
}

HospitalRecordPlayer.propTypes = propTypes;

export default HospitalRecordPlayer
