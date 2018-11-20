import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoSchoolBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NohoSchoolBackdrop',
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
                    'NohoSchoolBackdrop'
                )}
            </text>
        </Svg>
    )
}

NohoSchoolBackdrop.propTypes = propTypes;

export default NohoSchoolBackdrop
