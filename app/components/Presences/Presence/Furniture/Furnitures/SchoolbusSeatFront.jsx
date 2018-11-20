import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SchoolbusSeatFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SchoolbusSeatFront',
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
                    'SchoolbusSeatFront'
                )}
            </text>
        </Svg>
    )
}

SchoolbusSeatFront.propTypes = propTypes;

export default SchoolbusSeatFront
