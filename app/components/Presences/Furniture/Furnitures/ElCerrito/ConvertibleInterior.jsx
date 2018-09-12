import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ConvertibleInterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ConvertibleInterior',
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
                    'ConvertibleInterior'
                )}
            </text>
        </Svg>
    )
}

ConvertibleInterior.propTypes = propTypes;

export default ConvertibleInterior
