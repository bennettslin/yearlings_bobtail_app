import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoSchoolNeighbourhood = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NohoSchoolNeighbourhood',
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
                    'NohoSchoolNeighbourhood'
                )}
            </text>
        </Svg>
    )
}

NohoSchoolNeighbourhood.propTypes = propTypes;

export default NohoSchoolNeighbourhood
