import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PublicLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PublicLeft',
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
                    'PublicLeft'
                )}
            </text>
        </Svg>
    )
}

PublicLeft.propTypes = propTypes;

export default PublicLeft
