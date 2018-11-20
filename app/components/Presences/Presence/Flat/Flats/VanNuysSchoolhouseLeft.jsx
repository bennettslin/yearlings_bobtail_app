import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysSchoolhouseLeft = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'VanNuysSchoolhouseLeft',
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
                    'VanNuysSchoolhouseLeft'
                )}
            </text>
        </Svg>
    )
}

VanNuysSchoolhouseLeft.propTypes = propTypes

export default VanNuysSchoolhouseLeft
