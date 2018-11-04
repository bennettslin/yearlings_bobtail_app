import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ProgressChartLate = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ProgressChartLate',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'ProgressChartLate'
                )}
            </text>
        </Svg>
    )
}

ProgressChartLate.propTypes = propTypes;

export default ProgressChartLate
