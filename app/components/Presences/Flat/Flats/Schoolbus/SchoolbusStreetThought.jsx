import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SchoolbusStreetThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SchoolbusStreetThought',
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
                    'SchoolbusStreetThought'
                )}
            </text>
        </Svg>
    )
}

SchoolbusStreetThought.propTypes = propTypes;

export default SchoolbusStreetThought
