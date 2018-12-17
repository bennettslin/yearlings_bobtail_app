import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysSchoolBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'VanNuysSchoolBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'VanNuysSchoolBackdrop'
                )}
            </text>
        </Svg>
    )
}

VanNuysSchoolBackdrop.propTypes = propTypes

export default VanNuysSchoolBackdrop
