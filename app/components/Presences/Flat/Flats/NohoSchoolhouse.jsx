import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoSchoolhouse = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'NohoSchoolhouse',
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
                    'NohoSchoolhouse'
                )}
            </text>
        </Svg>
    )
}

NohoSchoolhouse.propTypes = propTypes

export default NohoSchoolhouse
